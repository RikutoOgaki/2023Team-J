// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { checkAuth } from '@/lib/auth/auth-logic';
import { now } from '@/lib/dao/common';
import { deleteExpiredSession, insertSession } from '@/lib/dao/session';
import { Session } from '@/types/entity/session';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

const { Pool } = require('pg')

type Input = {
    userId: string,
    pass: string
}

type Output = {
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const {
        userId,
        pass
    }: Input = req.body;

    const pool = new Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        max: 100,
        idleTimeoutMillis: 3000,
        connectionTimeoutMillis: 2000,
    })

    const client = await pool.connect()
    try {
        client.query(`BEGIN`)

        // アカウントの存在チェック
        const loginUser = await checkAuth(client, userId, pass)
        if (loginUser === undefined) {
            throw new Error()
        }

        // DB上の現在時刻取得(注: JavaScriptに降りてくる時点でミリ秒精度に落ちる!!DBはマイクロ秒)
        const currentTime = await now(client)

        // トークン生成
        const token = uuidv4() + currentTime.getTime()

        let session: Session = {
            fkUserAccount: loginUser.id,
            token: token,
            expiration: undefined,
            createUser: loginUser.id,
            updateUser: loginUser.id,
            creation: undefined,
            modification: undefined,
            version: 0
        }
        insertSession(client, session)

        // ついでに古いトークンはこのタイミングで消す
        deleteExpiredSession(client)

        // トークンをクライアントのCookieに保持させる
        res.setHeader('Set-Cookie', `token=${token}; Path=/; SameSite=Lax; HttpOnly; Secure; Max-Age=86400;`)
        res.status(200).json({})

        client.query(`COMMIT`)
    } catch (e) {
        client.query(`ROLLBACK`)
        throw e;
    } finally {
        client.release()
    }
}

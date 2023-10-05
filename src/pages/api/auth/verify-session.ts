// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { checkToken } from '@/lib/auth/auth-logic';
import { deleteExpiredSession } from '@/lib/dao/session';
import type { NextApiRequest, NextApiResponse } from 'next';

const { Pool } = require('pg')

type Output = {
    isLoggedin: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    let out: Output = {
        isLoggedin: false
    }

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

        // ついでにこのタイミングで不要なセッションを掃除
        deleteExpiredSession(client)

        // アカウントの存在チェック
        const loginUser = await checkToken(client, req.cookies.token as string)
        out.isLoggedin = loginUser !== undefined

        res.status(200).json(out)

        client.query(`COMMIT`)
    } catch (e) {
        client.query(`ROLLBACK`)
        throw e;
    } finally {
        client.release()
    }
}

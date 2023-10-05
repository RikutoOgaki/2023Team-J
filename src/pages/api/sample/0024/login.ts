// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

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

    // ログインチェック
    if (!(userId === 'xxxx' && pass === '1234')) {
        // 400 Bad Request
        res.status(400).json({})
        return
    }


    // UUIDでトークン生成（ただし、これで重複しない、との保証はない）
    const token = uuidv4()

    // トークンをクライアントのCookieに保持させる
    res.setHeader('Set-Cookie', `token=${token}; Path=/; SameSite=Lax; HttpOnly; Secure; Max-Age=86400;`)
    res.status(200).json({})
}

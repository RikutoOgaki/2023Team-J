// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Output = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    if (req.cookies.token === undefined) {
        // トークンが存在しない
        // 400 Bad Request
        res.status(400).json({
            message: '認証エラー'
        })
        return
    }

    // トークンが連携されている
    // しかし、このトークンが適切かどうかは別問題。妥当性をチェックする必要がある。
    res.status(200).json({
        message: '認証OK'
    })
}

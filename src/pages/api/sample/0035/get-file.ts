// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createReadStream, existsSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

type Output = {
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const fileName = (req.query.fileName as string)
    const filePath = path.join('/var/nfs', fileName)

    // 存在チェック
    if (!existsSync(filePath)) {
        // Not Found(404)
        res.status(404).json({})
        return
    }

    // MIMEを固定しているが、実際には本来のファイルに対応するMIMEを。
    res.setHeader('Content-Type', 'image/*')
    // ファイル名
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`)

    // レスポンス
    createReadStream(filePath).pipe(res)
}

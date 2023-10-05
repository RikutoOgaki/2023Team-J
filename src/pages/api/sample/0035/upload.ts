// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Fields, File, Files, IncomingForm } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';

// リクエストボディの自動パーサを無効に
// https://nextjs.org/docs/api-routes/request-helpers
export const config = {
    api: {
        bodyParser: false
    }
}

type Output = {
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const form = await new Promise<{ fields: Fields, files: Files }>((resolve, reject) => {
        const form = new IncomingForm({
            uploadDir: '/var/nfs'
        })

        form.parse(req, (err, fields, files) => {
            if (err) {
                // エラーの場合
                console.log(err)
                reject(err)
                return
            }

            // 成功
            resolve({ fields, files })
        })
    })

    // ファイル
    const sampleFile = (form.files.sampleFile as File)
    console.log('filepath=' + sampleFile.filepath)
    console.log('originalFilename=' + sampleFile.originalFilename)
    console.log('newFilename=' + sampleFile.newFilename)
    console.log('mimetype=' + sampleFile.mimetype)

    // テキスト
    const sampleText = (form.fields.sampleText as string)
    console.log('text=' + sampleText)

    res.status(200).json({
        fileName: sampleFile.newFilename
    })
}

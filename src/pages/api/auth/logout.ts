// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Output = {
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    res.setHeader('Set-Cookie', `token=; Path=/; SameSite=Lax; HttpOnly; Secure;`)
    res.status(200).json({})
}

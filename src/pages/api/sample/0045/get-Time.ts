import type { NextApiRequest, NextApiResponse } from 'next'

type Output = {
  time: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Output>
) {
  res.status(200).json({ time: new Date().toLocaleString()})
}
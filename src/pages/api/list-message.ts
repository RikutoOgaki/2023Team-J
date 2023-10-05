
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { Pool } = require('pg')

type Message = {
    id: number,
    message: string,
    version: number
}

type Input = {
}
type Output = {
    list: Array<Message>
}

async function listMessage(client: any) {
    const result = await client.query(`
        SELECT
            Message.id AS "id",
            Message.message AS "message",
            Message.version AS "version"
        FROM
            Message
        ORDER BY
            Message.creation DESC,
            Message.id DESC
    `)

    return result.rows
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const json: Input = req.body

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
        const rows = await listMessage(client)

        res.status(200).json({
            list: rows
        })
    } finally {
        client.release()
    }
}
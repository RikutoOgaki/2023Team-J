// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { Pool } = require('pg')

type SampleMessage = {
    id: number,
    message: string
}

type Output = {
    list: Array<SampleMessage>
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
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
        const result = await client.query(`
            SELECT
                SampleMessage.id AS "id",
                SampleMessage.message AS "message"
            FROM
                SampleMessage
            ORDER BY
                SampleMessage.creation DESC,
                SampleMessage.id DESC
        `)

        res.status(200).json({
            list: result.rows
        })
    } finally {
        client.release()
    }
}

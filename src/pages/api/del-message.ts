// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { Pool } = require('pg')

type Input = {
    id: string,
    version: string
}
type Output = {
    result: string
}

async function delMessage(client: any, json: Input) {
    await client.query('BEGIN')

    try {
        const result = await client.query(`
            DELETE
            FROM
                Message
            WHERE
                Message.id=$1 AND
                Message.version=$2
        `, [json.id, json.version])

        await client.query('COMMIT')
    } catch (e) {
        await client.query('ROLLBACK')
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    // const { message }: Input = req.body
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
        await delMessage(client, json)

        res.status(200).json({
            result: '書き込み成功'
        })
    } finally {
        client.release()
    }
}
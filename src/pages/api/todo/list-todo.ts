
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { Pool } = require('pg')

type Todo = {
    id: number,
    memo: string,
    version: number
}

type Input = {
}
type Data = {
    list: Array<Todo>
}

async function listTodo(client: any) {
    const result = await client.query(`
        SELECT
            Todo.id AS "id",
            Todo.memo AS "memo",
            Todo.version AS "version"
        FROM
            Todo
        ORDER BY
            Todo.id DESC
    `)

    return result.rows
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
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
        const rows = await listTodo(client)

        res.status(200).json({
            list: rows
        })
    } finally {
        client.release()
    }
}
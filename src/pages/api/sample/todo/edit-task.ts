// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { Pool } = require('pg')

type ToDoDetail = {
    id: number,
    task: string,
    version: number
}

type Input = {
    todo: ToDoDetail
}
type Output = {
}

async function editTask(client: any, json: ToDoDetail): Promise<number> {
    await client.query('BEGIN')

    try {
        const result = await client.query(`
            UPDATE
                ToDoDetail
            SET
                task=$3,
                modification=NOW(),
                version=version + 1
            WHERE
                id=$1 AND
                version=$2
        `, [json.id, json.version, json.task])

        if (result.rowCount === 0) {
            throw Error()
        }

        await client.query('COMMIT')

        return result.rowCount
    } catch (e) {
        await client.query('ROLLBACK')
    }

    return 0
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
        const updateRowCount = await editTask(client, json.todo)

        if (updateRowCount === 0) {
            // Conflict
            res.status(409).json({})
            return
        }

        res.status(200).json({})
    } finally {
        client.release()
    }
}
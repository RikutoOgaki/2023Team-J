import type { NextApiRequest, NextApiResponse } from 'next'

const { Pool } = require('pg')

type Input = {
    memo: string
}

type Data = {
}

async function getSequence(client: any) {
    const result = await client.query(`
        SELECT
            NEXTVAL('TodoSeq') AS "id"
    `)

    // そのままだとstringとして戻るようだ。typeofで確認できるよ。
    // pg-types？で、戻りのstringを任意の型に変換するカスタムが可能なようだ。
    return result.rows[0].id
}

async function addTodo(client: any, json: Input) {
    await client.query('BEGIN')

    const id = await getSequence(client)
    try {
        const result = await client.query(`
            INSERT INTO Todo(
                id,
                memo,
                version
            ) VALUES (
                $1,
                $2,
                0
            )
        `, [id, json.memo])

        await client.query('COMMIT')
    } catch (e) {
        await client.query('ROLLBACK')
    }
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
        await addTodo(client, json)

        res.status(200).json({})
    } finally {
        client.release()
    }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { Pool } = require('pg')

type login = {
    id: number,
    userid: string,
    userpass: string
}

type Input = {
}
type Output = {
}

async function loginstatsu(client: any, json: login) {
    await client.query('BEGIN')

    const result = await client.query(`
        SELECT
            Userlogin.id AS "id",
            Userlogin.userid AS "userid",
            Userlogin.userpass AS "userpass"
        FROM
            Userlogin
        WHERE
            userid = $1 AND
            userpass =  $2
    `, [json.userid, json.userpass])
    if (result.rows.length === 0) {
        return undefined
    }
    return result
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const json: login = req.body

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

    console.log(json);


    const client = await pool.connect()
    try {
        const result = await loginstatsu(client, json)
        if (result === undefined) {
            res.status(400).json({
                result: 'idまたはパスワードが間違っています'
            })
        }
        else {
            res.status(200).json({
                result: '0047'
            })
        }

    } finally {
        client.release()
    }
}
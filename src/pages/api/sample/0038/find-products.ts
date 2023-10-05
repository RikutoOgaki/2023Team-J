
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { Pool } = require('pg')

type SampleProduct = {
    id: number,
    code: string,
    category: string,
    quantity: number,
    version: number
}

type Output = {
    list: Array<SampleProduct>,
    totalRecords: number
}

async function findProducts(client: any, offset: number) {
    const result = await client.query(`
        SELECT
            SampleProduct.id AS "id",
            SampleProduct.name AS "name",
            SampleProduct.code AS "code",
            SampleProduct.category AS "category",
            SampleProduct.quantity AS "quantity",

            SampleProduct.creation AS "creation",
            SampleProduct.modification AS "modification",
            SampleProduct.version AS "version"
        FROM
            SampleProduct
        ORDER BY
            SampleProduct.creation DESC,
            SampleProduct.id DESC
        OFFSET $1
        LIMIT 10
    `, [offset])
    return result.rows
}

async function getCountProducts(client: any) {
    const result = await client.query(`
        SELECT
            COUNT(*) AS "cnt"
        FROM
            SampleProduct
    `)

    const totalRecords = result.rows[0].cnt
    console.log(typeof totalRecords === 'string')
    console.log(totalRecords)

    return result.rows[0].cnt
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const offset = typeof req.query.offset === 'string' ?
        parseInt(req.query.offset) : 0

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
        const list = await findProducts(client, offset)
        const totalRecords = await getCountProducts(client)

        res.status(200).json({
            list,
            totalRecords: parseInt(totalRecords)
        })
    } finally {
        client.release()
    }
}
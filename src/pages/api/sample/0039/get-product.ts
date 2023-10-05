
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
    product?: SampleProduct
}

async function getProduct(client: any, id: number) {
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
        WHERE
            SampleProduct.id=$1
    `, [id])

    return result.rows.length > 0 ? result.rows[0] : undefined
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    if (typeof req.query.id !== 'string') {
        res.status(404).json({})
        return
    }

    const id = typeof req.query.id === 'string' ?
        parseInt(req.query.id) : 0

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
        const product = await getProduct(client, id)

        res.status(200).json({
            product
        })
    } finally {
        client.release()
    }
}
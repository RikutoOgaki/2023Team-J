
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DataTableFilterMeta, DataTableFilterMetaData } from 'primereact/datatable'

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

async function findProducts(client: any, offset: number, filters: DataTableFilterMeta) {
    const filterCondition = filters !== undefined ?
        ('%' + (filters.code as DataTableFilterMetaData).value + '%') : '%%'

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
            SampleProduct.code LIKE $2
        ORDER BY
            SampleProduct.creation DESC,
            SampleProduct.id DESC
        OFFSET $1
        LIMIT 10
    `, [offset, filterCondition])
    return result.rows
}

async function getCountProducts(client: any, filters: DataTableFilterMeta) {
    const filterCondition = filters !== undefined ?
        ('%' + (filters.code as DataTableFilterMetaData).value + '%') : '%%'

    const result = await client.query(`
        SELECT
            COUNT(*) AS "cnt"
        FROM
            SampleProduct
        WHERE
            SampleProduct.code LIKE $1
    `, [filterCondition])

    return result.rows[0].cnt
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const offset = typeof req.query.offset === 'string' ?
        parseInt(req.query.offset) : 0

    const filters: DataTableFilterMeta = typeof req.query.filters === 'string' ?
        JSON.parse(req.query.filters) : undefined

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
        const list = await findProducts(client, offset, filters)
        const totalRecords = await getCountProducts(client, filters)

        res.status(200).json({
            list,
            totalRecords: parseInt(totalRecords)
        })
    } finally {
        client.release()
    }
}
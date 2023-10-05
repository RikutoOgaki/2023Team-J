export async function now(client: any) {
    const result = await client.query(`
        SELECT NOW() AS "ret"
    `, [
    ])
    return result.rows[0].ret as Date
}

export async function currentDate(client: any) {
    const result = await client.query(`
        SELECT CURRENT_DATE AS "ret"
    `, [
    ])
    return result.rows[0].ret as Date
}

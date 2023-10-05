import { UserAccount } from '@/types/entity/user-account'

export async function getByUserIdAndPass(client: any, userId: string, pass: string): Promise<UserAccount | undefined> {
    const result = await client.query(`
        SELECT
            UserAccount.id AS "id",
            UserAccount.displayName AS "displayName",
            UserAccount.userId AS "userId",
            UserAccount.pw AS "pw",

            UserAccount.createUser AS "createUser",
            UserAccount.updateUser AS "updateUser",
            UserAccount.creation AS "creation",
            UserAccount.modification AS "modification",
            UserAccount.version AS "version"
        FROM
            UserAccount
        WHERE
            UserAccount.userId=$1 AND
            UserAccount.pw=$2
    `, [userId, pass])

    return result.rows[0]
}

export async function getByActiveToken(client: any, token: string): Promise<UserAccount | undefined> {
    const result = await client.query(`
        SELECT
            UserAccount.id AS "id",
            UserAccount.displayName AS "displayName",
            UserAccount.userId AS "userId",
            UserAccount.pw AS "pw",

            UserAccount.createUser AS "createUser",
            UserAccount.updateUser AS "updateUser",
            UserAccount.creation AS "creation",
            UserAccount.modification AS "modification",
            UserAccount.version AS "version"
        FROM
            UserAccount INNER JOIN Session ON (
                UserAccount.id=Session.fkUserAccount
            )
        WHERE
            Session.token=$1 AND
            Session.expiration >= NOW()
    `, [token])

    return result.rows[0]
}

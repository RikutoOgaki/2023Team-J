import { Session } from '@/types/entity/session'

export async function insertSession(client: any, entity: Session) {
    const result = await client.query(`
        INSERT INTO Session (
            fkUserAccount,
            token,
            expiration,
            
            createUser,
            updateUser,
            creation,
            modification,
            version
        ) VALUES (
            $1,
            $2,
            NOW() + interval '8 hours',

            $3,
            $4,
            NOW(),
            NOW(),
            0
        )
    `, [
        entity.fkUserAccount,
        entity.token,
        entity.createUser,
        entity.updateUser
    ])
}

export async function deleteSessionByToken(client: any, token: string) {
    const result = await client.query(`
        DELETE
        FROM
            Session
        WHERE
            Session.token=$1
    `, [
        token
    ])
    return result as number
}

export async function deleteExpiredSession(client: any) {
    const result = await client.query(`
        DELETE
        FROM
            Session
        WHERE
            Session.expiration < NOW()
    `, [
    ])
    return result as number
}
import { getByActiveToken, getByUserIdAndPass } from '@/lib/dao/user-account'

export async function checkAuth(client: any, userId: string, pass: string) {
    return await getByUserIdAndPass(client, userId, pass)
}

export async function checkToken(client: any, token: string) {
    return await getByActiveToken(client, token)
}
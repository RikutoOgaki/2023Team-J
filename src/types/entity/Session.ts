import { Entity } from '@/types/entity/entity'

export type Session = {
    fkUserAccount: number,
    token: string,
    expiration: Date | undefined
} & Entity
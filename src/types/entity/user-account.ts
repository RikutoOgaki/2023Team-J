import { Entity } from '@/types/entity/entity'

export type UserAccount = {
    id: number,
    displayName: string,
    userId: string,
    pw: string
} & Entity
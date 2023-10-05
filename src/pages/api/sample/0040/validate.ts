// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { toBig } from '@/lib/utils/number-utils'
import Big from 'big.js'
import type { NextApiRequest, NextApiResponse } from 'next'

type Input = {
    age: string
}

type Output = {
    errors?: Array<string>
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const inJson: Input = req.body

    const errors: Array<string> = []

    const numAge = toBig(inJson.age)
    if (numAge === undefined) {
        errors.push('年齢を入力してください')
    }

    if (numAge !== undefined) {
        if (!(numAge.gte(Big('0')) && numAge.lte(Big('200')))) {
            errors.push('年齢は0-200の範囲で入力してください')
        }

        if (numAge.eq(Big('32'))) {
            errors.push('32歳は岡本さんしか許されていません')
        }
    }

    if (errors.length !== 0) {
        res.status(400).json({
            errors
        })
        return
    }

    res.status(200).json({})
}
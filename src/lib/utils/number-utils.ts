import Big from 'big.js'

export function format(src: Big, maxFractionDigits: number = 0): string {
    if (!src) {
        return ''
    }

    const strNum = src.toString()

    // 小数点ある？
    const fractionDigitsSeparatorIdx = strNum.lastIndexOf('.')
    let strIntDigits = ''
    let strFractionDigits = ''
    if (fractionDigitsSeparatorIdx !== -1) {
        // 小数点あったぜ。
        // 整数部と小数部に分割しよう。
        strIntDigits = strNum.substring(0, fractionDigitsSeparatorIdx)
        strFractionDigits = strNum.substring(fractionDigitsSeparatorIdx + 1, strNum.length)
    } else {
        // 整数のみだな
        strIntDigits = strNum
        strFractionDigits = ''
    }

    let result = ''

    // 整数部を3桁毎にカンマで区切る。
    let cnt = 0;
    for (let i = strIntDigits.length - 1; i >= 0; i--) {
        result = strIntDigits.charAt(i) + result

        cnt++
        if (cnt === 3 && i !== 0) {
            // 3桁目に到達かつ、文字の先端ではないよね？
            // カンマ追加、カウンタリセット
            result = ',' + result
            cnt = 0
        }
    }

    // 小数部を指定桁まで追記する
    if (strFractionDigits !== '' && maxFractionDigits > 0) {
        result += '.'

        cnt = 0
        for (let i = 0; i < strFractionDigits.length; i++) {
            result += strFractionDigits[i]

            cnt++
            if (cnt >= maxFractionDigits) {
                break
            }
        }
    }

    return result
}

export function toBig(src: string = ''): Big | undefined {
    // TODO 心もとないtrim
    // カンマを除去
    try {
        return Big(src.trim().replaceAll(',', ''))
    } catch (e) {
        // 数値として解釈出来なかった...
        return undefined
    }
}
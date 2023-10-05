import { useState } from 'react'
import Big from 'big.js'

type State = {
    value1: string,
    value2: string,
    result: string
}

export default function SampleForm0020() {
    const [state, setState] = useState<State>({
        value1: '',
        value2: '',
        result: ''
    })

    const calc1 = new Big('1').plus(new Big('2')).toString()
    const calc2 = new Big('1').minus(new Big('2')).toString()
    const calc3 = new Big('1').times(new Big('2')).toString()
    const calc4 = new Big('1').div(new Big('2')).toString()
    const calc5 = new Big('4').div(new Big('6')).round(2, Big.roundDown).toString()
    const calc6 = new Big('1').div(new Big('3')).round(2, Big.roundUp).toString()
    const calc7 = new Big('4').div(new Big('6')).round(2, Big.roundHalfUp).toString()

    return (
        <div>
            <div>
                <h1>リファレンス</h1>
                <a href='https://mikemcl.github.io/big.js/'>big.js</a>

                <h1>四則演算</h1>
                <p>加算 1 + 2 = {calc1}</p>
                <p>減算 1 - 2 = {calc2}</p>
                <p>乗算 1 * 2 = {calc3}</p>
                <p>除算 1 / 2 = {calc4}</p>
            </div>
            <div>
                <h1>丸め</h1>
                <p>切り捨て(小数点第2位) 4 / 6 = {calc5} (0.666666...)</p>
                <p>切り上げ(小数点第2位) 1 / 3 = {calc6} (0.333333...)</p>
                <p>四捨五入(小数点第2位) 4 / 6 = {calc7} (0.666666...)</p>
            </div>
            <div>
                <h1>例：成約率</h1>

                <input type='text' placeholder='商談数' value={state.value1}
                    onChange={(e) => setState({
                        ...state,
                        value1: e.target.value
                    })} />

                <input type='text' placeholder='成約数' value={state.value2}
                    onChange={(e) => setState({
                        ...state,
                        value2: e.target.value
                    })} />

                <p>{state.result}</p>

                <input type='button' value='計算' onClick={() => {
                    const num1 = new Big(state.value1)
                    const num2 = new Big(state.value2)
                    const num100 = new Big('100')

                    const numResult = num2.times(num100).div(num1).round(2, Big.roundDown)
                    setState({
                        ...state,
                        result: numResult.toString() + '%'
                    })
                }} />
            </div>
        </div>
    )
}
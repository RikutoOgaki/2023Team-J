import { useState } from 'react'

function Calc() {
    const [state, setState] = useState({
        a: '',
        b: '',
        result: 0
    })
    return (
        <div>
            <input type='text' value={state.a}
                onChange={(e) => setState({
                    ...state,
                    a: e.target.value
                })} />
            <input type='text' value={state.b}
                onChange={(e) => setState({
                    ...state,
                    b: e.target.value
                })} />
            <input type='button' value='CALC'
                onClick={() => {
                    let numA = parseInt(state.a)
                    let numB = parseInt(state.b)

                    numA = Number.isNaN(numA) ? 0 : numA
                    numB = Number.isNaN(numB) ? 0 : numB

                    setState({
                        ...state,
                        result: numA + numB
                    })
                }} />
            <p>答え:{state.result}</p>
        </div>
    )
}

export default function SampleForm0007() {
    const [state, setState] = useState('')

    return (
        <>
            <div>
                <input type='text'
                    value={state}
                    onChange={(e) => setState(e.target.value)} />
                <p>入力内容:{state}</p>
            </div>
            <Calc />
        </>
    )
}
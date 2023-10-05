import { useState } from 'react'
import { Component } from './component'

type State = {
    count: number
}

export default function SampleForm0032() {
    const [state, setState] = useState<State>({
        count: 0
    })

    return (
        <>
            <h1>useContext Sample 0(useContextなし)</h1>
            <Component
                count={state.count}

                onClickAdd={() => setState({
                    ...state,
                    count: state.count + 1
                })}

                onClickMinus={() => setState({
                    ...state,
                    count: state.count - 1
                })}
            />
        </>
    )
}
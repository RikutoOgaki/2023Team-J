
import { useState } from 'react'
import { Component } from './component'
import { SampleContext } from './context'

type State = {
    count: number
}

export default function SampleForm0031() {
    const [state, setState] = useState<State>({
        count: 0
    })

    return (
        <>
            <h1>useContext Sample 1</h1>
            <SampleContext.Provider value={{
                state
            }}>
                <Component />

                <button onClick={() => setState({
                    ...state,
                    count: state.count + 1
                })}>ADD</button>

                <button onClick={() => setState({
                    ...state,
                    count: state.count - 1
                })}>MINUS</button>

            </SampleContext.Provider>
        </>
    )
}
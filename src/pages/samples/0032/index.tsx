
import { Component } from './component'
import { SampleContext } from './context'
import { useCustomState } from './hooks'

export default function SampleForm0032() {
    const [state, { plus, minus }] = useCustomState()

    return (
        <>
            <h1>useContext Sample 2(useContext &amp; Custom Hooks)</h1>
            <SampleContext.Provider value={{
                state,
                plus,
                minus
            }}>
                <Component />
            </SampleContext.Provider>
        </>
    )
}
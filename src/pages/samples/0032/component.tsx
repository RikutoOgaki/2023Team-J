import { useContext } from 'react'
import { SampleContext } from './context'

export function Component() {
    const sampleState = useContext(SampleContext)
    return (
        <>
            <p>{sampleState.state.count}</p>
            <button onClick={() => sampleState.plus()}>ADD</button>
            <button onClick={() => sampleState.minus()}>MINUS</button>
        </>
    )
}
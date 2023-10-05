import { useContext } from 'react'
import { SampleContext } from './context'

export function Component() {
    const sampleContext = useContext(SampleContext)
    return (
        <p>{sampleContext.state.count}</p>
    )
}
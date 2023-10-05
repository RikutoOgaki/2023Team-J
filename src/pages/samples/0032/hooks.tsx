import { useState } from 'react'

export type SampleState = {
    count: number
}

export function useCustomState(): [
    SampleState,
    {
        plus: () => void,
        minus: () => void
    }
] {
    const [state, setState] = useState<SampleState>({
        count: 0
    })

    const plus = () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }

    const minus = () => {
        setState({
            ...state,
            count: state.count - 1
        })
    }


    return [state, {
        plus,
        minus
    }]
}
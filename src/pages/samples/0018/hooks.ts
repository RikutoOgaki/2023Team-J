import { useState } from 'react'

type CustomeState = {
    count: number
}

type HookType = [
    CustomeState,
    {
        plus: () => Promise<void>,
        minus: () => Promise<void>
    }
]

export function useCustomState(): HookType {
    const [state, setState] = useState<CustomeState>({
        count: 0
    })

    const plus = async () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }

    const minus = async () => {
        setState({
            ...state,
            count: state.count - 1
        })
    }

    return [state, { plus, minus }]
}
import { useState } from 'react'

type ParentState = {
    value: string
}

type ChildState = {
    value: string
}

type ChildProps = {
    onTabara: (v: string) => void
}

function ChildComponent(props: ChildProps) {
    const [state, setState] = useState<ChildState>({
        value: ''
    })
    return (
        <div>
            <input type='text' value={state.value}
                onChange={(e) => setState({
                    ...state,
                    value: e.target.value
                })}
                onBlur={() => props.onTabara(state.value)} />
        </div>
    )
}

export default function SampleForm0012() {
    const [state, setState] = useState<ParentState>({
        value: ''
    })
    return (
        <>
            <div>親{state.value}</div>
            <ChildComponent onTabara={(v) => setState({
                ...state,
                value: v
            })} />
        </>
    )
}
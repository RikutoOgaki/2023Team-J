import { useState } from 'react'

type SampleForm0016State = {
}

type InputComponentState = {
    value: string
}

type InputComponentProps = {
    handleClear: () => void,
    handleEditComplete: (v: string) => void
}

function InputComponent(props: InputComponentProps) {
    const [state, setState] = useState<InputComponentState>({
        value: ''
    })
    return (
        <div>
            <p>{state.value}</p>
            <input value={state.value}
                onChange={(e) => setState({
                    ...state,
                    value: e.target.value
                })}
                onBlur={() => props.handleEditComplete(state.value)} />
            <input type='button' value='CLEAR'
                onClick={() => {
                    setState({
                        ...state,
                        value: ''
                    })
                    props.handleClear()
                }} />
        </div>
    )
}

export default function SampleForm0016() {
    const [state, setState] = useState<SampleForm0016State>()

    return (
        <>
            <p>SampleForm0016</p>
            <InputComponent
                handleClear={() => {
                    console.log('CLEAR!!')
                }}
                handleEditComplete={(v) => {
                    console.log('EDIT!!:' + v);
                }}
            />
        </>
    )
}
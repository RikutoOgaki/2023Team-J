import { useState } from 'react'

type Props = {
    memo: string,
    onOkamoto: (v: string) => void
}

type State = {
    memo: string
}

export function SampleComponent(props: Props) {
    const [state, setState] = useState<State>({
        memo: props.memo
    })

    return (
        <div>
            <p>子の内部状態</p>
            <input type='text' value={state.memo}
                onChange={(e) => setState({
                    ...state,
                    memo: e.target.value
                })}
                onBlur={() => props.onOkamoto(state.memo)} />
        </div>
    )
}
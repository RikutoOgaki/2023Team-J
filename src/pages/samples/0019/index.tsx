import { SampleComponent } from './sample-component'
import { useState } from 'react'

type SampleFormState = {
    memo: string
}

export default function SampleForm0019() {
    const [state, setState] =
        useState<SampleFormState>({
            memo: 'XXX'
        })

    return (
        <div>
            <p>SampleForm0019 コールバック</p>
            <p>親の内部状態={state.memo}</p>
            <SampleComponent memo={state.memo}
                onOkamoto={(v) => setState({
                    ...state,
                    memo: v
                })} />
        </div>
    )
}
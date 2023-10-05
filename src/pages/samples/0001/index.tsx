import { useState } from 'react'
import { SampleComponent } from './sample-component'

type SampleFormState = {
  memo: string
}

export default function SampleForm0001() {
  const [state, setState] =
    useState<SampleFormState>({
      memo: 'XXX'
    })

  return (
    <div>
      <p>SampleForm0001 親の内部状態={state.memo}</p>
      <SampleComponent memo={state.memo}
        onOkamoto={(v) => setState({
          ...state,
          memo: v
        })} />
    </div>
  )
}
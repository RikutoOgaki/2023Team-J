import { useState } from 'react'

type Props = {
  count: number
}

function TestComponent(props: Props = { count: 0 }) {
  return (
    <div>{props.count}</div>
  )
}

export default function SampleForm0003() {
  const [state, setState] = useState(0)

  return (
    <>
      <p>Sample0003</p>

      <TestComponent count={state} />

      <input type='button' value='ADD'
        onClick={() => setState(state + 1)} />
    </>
  )
}
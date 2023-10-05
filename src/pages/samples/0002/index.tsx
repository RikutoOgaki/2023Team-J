import { useState } from 'react'

type Props = {
  message: string
}

function TestComponent(props: Props = { message: 'initial value' }) {
  return (
    <div>{props.message}</div>
  )
}

export default function SampleForm0002() {
  const [state, setState] = useState(0)

  return (
    <>
      <p>Sample0002</p>

      <TestComponent message='Hello' />
    </>
  )
}
import { useEffect, useState } from 'react'

function rollDice() {
  return Math.floor(Math.random() * 6 + 1)
}

export default function SampleForm0004() {
  const [state, setState] = useState(0)

  useEffect(() => {
    setState(rollDice())
  }, [])

  return (
    <>
      <p>Sample0004</p>
      <p>サイコロ:{state}</p>

      <input type='button' value='リトライ'
        onClick={() => setState(rollDice())} />
    </>
  )
}
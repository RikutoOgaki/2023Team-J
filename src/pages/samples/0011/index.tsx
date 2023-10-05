import { useState, useRef, useEffect } from 'react'
import styles from '@/styles/samples/0011/index.module.css'

type ToDoState = {
  memo: string,
  editFlag: boolean
}

type ToDoProps = {
  memo: string
}

function ToDo(props: ToDoProps) {
  const [state, setState] = useState<ToDoState>({
    memo: props.memo,
    editFlag: false
  })
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (state.editFlag === true) {
      inputRef.current?.focus()
    }
  }, [state.editFlag])

  return <div>
    {state.editFlag === false &&
      <p className={styles.todo}
        onClick={() => {
          setState({
            ...state,
            editFlag: true
          })
        }}>{state.memo}</p>
    }
    {state.editFlag === true &&
      <input ref={inputRef}
        type='text' value={state.memo}
        onChange={(e) => setState({
          ...state,
          memo: e.target.value
        })}
        onBlur={() => setState({
          ...state,
          editFlag: false
        })} />
    }
  </div>
}

export default function SampleForm0011() {
  const [state, setState] = useState({
    list: [
      { id: 1, memo: 'xxx' },
      { id: 2, memo: 'yyy' },
      { id: 3, memo: 'zzz' }
    ]
  })

  return (
    <>
      <p>Sample0011</p>
      {state.list.map((v) =>
        <ToDo key={v.id} memo={v.memo} />)}
    </>
  )
}
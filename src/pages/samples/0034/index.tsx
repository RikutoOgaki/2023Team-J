import { useEffect, useState, useRef, useReducer } from 'react'
import { reducer } from './reducer'
import { addTodo, listTodo } from './actioncreator'

export default function Okamon() {
    const [state, setState] = useState<{ inMemo: string }>({ inMemo: '' })
    const wkRef = useRef<HTMLDivElement>(null)

    const [redState, dispatch] = useReducer(reducer, {
        message: '',
        todoList: []
    })

    useEffect(() => {
        listTodo(dispatch)
    }, [])

    useEffect(() => {
        console.log(wkRef.current?.getBoundingClientRect().width)
    })

    return (
        <>
            <p>{redState.message}</p>

            <div ref={wkRef} onClick={(e) => {
                console.log(e.target)
            }}>
                <p>xxxxx<span>yyyyyy</span></p>
            </div>

            <input type='text' value={state.inMemo}
                onChange={(e) => {
                    setState({
                        ...state,
                        inMemo: e.target.value
                    })
                }} />

            <button onClick={() => {
                addTodo(dispatch, state.inMemo)
            }}>ADD</button>

            {redState.todoList.map((todo) =>
                <div key={todo.id}>
                    <p>{todo.memo}</p>
                </div>
            )}
        </>
    )
}
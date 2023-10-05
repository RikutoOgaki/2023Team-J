import { ToDoDetailsProps, ToDoDetailState } from '@/sample/todo2/types'
import styles from '@/styles/samples/todo/index.module.css'
import { useEffect, useRef, useState } from 'react'

export function ToDoRow(props: ToDoDetailsProps) {
    const [state, setState] = useState<ToDoDetailState>({
        task: props.model.task,
        editFlag: false
    })
    const inRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (state.editFlag === true) {
            inRef.current?.focus()
        }
    }, [state.editFlag])

    return (
        <div className={styles.todoDetail}>
            {state.editFlag &&
                <input ref={inRef} type='text' value={state.task}
                    onChange={(e) => setState({
                        ...state,
                        task: e.target.value
                    })}
                    onBlur={() => {
                        setState({
                            ...state,
                            editFlag: false
                        })

                        props.handleEdit({
                            task: state.task
                        })
                    }} />
            }
            {!state.editFlag &&
                <>
                    <p
                        onClick={() => {
                            if (state.editFlag === false) {
                                setState({
                                    ...state,
                                    editFlag: true
                                })
                            }
                        }}
                    >{state.task}</p>
                    <input type='button' value='削除'
                        onClick={() => props.handleDelete()} />
                </>
            }
        </div>
    )
}
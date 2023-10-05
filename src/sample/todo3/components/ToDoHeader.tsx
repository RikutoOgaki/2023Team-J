import { ToDoHeaderProps, ToDoHeaderState } from '@/sample/todo3/types'
import { useState } from 'react'

export function ToDoHeader(props: ToDoHeaderProps) {
    const [state, setState] = useState<ToDoHeaderState>({
        task: ''
    })
    return (
        <div>
            <input type='text' value={state.task}
                onChange={(e) => setState({
                    ...state,
                    task: e.target.value
                })} />
            <input type='button' value='登録'
                onClick={() => props.handleRegist({
                    task: state.task
                })} />
        </div>
    )
}
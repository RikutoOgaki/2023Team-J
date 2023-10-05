import { addTask, delTask, editTask, listTask } from '@/sample/todo2/actions'
import { ToDoHeader } from '@/sample/todo2/components/ToDoHeader'
import { ToDoRow } from '@/sample/todo2/components/ToDoRow'
import { ToDoAppState } from '@/sample/todo2/types'
import { useEffect, useState } from 'react'

export default function ToDoApp() {
    const [state, setState] = useState<ToDoAppState>({
        todoList: [],
        command: 'RELOAD'
    })

    useEffect(() => {
        if (state.command === 'RELOAD') {
            (async () => {
                const list = await listTask()
                setState({
                    ...state,
                    todoList: list,
                    command: ''
                })
            })()
        }
    }, [state.command])

    return (
        <>
            <h1>TODO APP - 推敲1(ファイル分割)</h1>

            <ToDoHeader handleRegist={(e) => {
                (async () => {
                    try {
                        await addTask(e.task)
                        setState({ ...state, command: 'RELOAD' })
                    } catch (e) {
                        alert('失敗')
                    }
                })()
            }} />

            {state.todoList.map((todo) =>
                <ToDoRow key={todo.id} model={todo}
                    handleEdit={(e) => {
                        (async () => {
                            try {
                                const ret = await editTask({
                                    ...todo,
                                    task: e.task
                                })
                                setState({ ...state, command: 'RELOAD' })
                            } catch (e) {
                                alert('失敗')
                            }
                        })()
                    }}
                    handleDelete={() => {
                        (async () => {
                            try {
                                await delTask(todo)
                                setState({ ...state, command: 'RELOAD' })
                            } catch (e) {
                                alert('失敗')
                            }
                        })()
                    }} />
            )}
        </>
    )
}
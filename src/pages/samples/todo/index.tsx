import styles from '@/styles/samples/todo/index.module.css'
import { useEffect, useRef, useState } from 'react'

type ToDoDetail = {
    id: number,
    task: string,
    version: number
}

type ToDoAppState = {
    todoList: Array<ToDoDetail>,
    command: string
}

type ToDoHeaderState = {
    task: string
}

type ToDoDetailState = {
    task: string,
    editFlag: boolean
}

type ToDoHeaderProps = {
    handleRegist: (e: { task: string }) => void,
}

type ToDoDetailsProps = {
    model: ToDoDetail,
    handleEdit: (e: { task: string }) => void
    handleDelete: () => void
}

async function addTask(task: string) {
    const res = await fetch('/api/sample/todo/add-task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            task
        })
    })

    if (res.status !== 200) {
        throw new Error()
    }
}

async function editTask(todo: ToDoDetail) {
    const res = await fetch('/api/sample/todo/edit-task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            todo
        })
    })

    if (res.status !== 200) {
        throw new Error()
    }
}

async function delTask(todo: ToDoDetail) {
    const res = await fetch('/api/sample/todo/del-task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            todo
        })
    })

    if (res.status !== 200) {
        throw new Error()
    }
}

async function listTask() {
    const res = await fetch('/api/sample/todo/list-task', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        }
    })

    const result = await res.json()
    return result.list
}

function ToDoHeader(props: ToDoHeaderProps) {
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

function ToDoDetail(props: ToDoDetailsProps) {
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
            <h1>TODO APP(素直に実装したバージョン)</h1>

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
                <ToDoDetail key={todo.id} model={todo}
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
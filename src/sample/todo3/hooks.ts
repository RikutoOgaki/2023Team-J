import { addTask, delTask, editTask, listTask } from '@/sample/todo3/actions'
import { ToDoAppState, ToDoDetail } from '@/sample/todo3/types'
import { useEffect, useState } from 'react'

type UseToDoHookType = [
    ToDoAppState,
    {
        addTaskAction: (task: string) => Promise<void>,
        editTaskAction: (todo: ToDoDetail, task: string) => Promise<void>,
        delTaskAction: (todo: ToDoDetail) => Promise<void>
    }
]

export function useToDoState(): UseToDoHookType {
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

    const addTaskAction = async (task: string) => {
        try {
            await addTask(task)
            setState({ ...state, command: 'RELOAD' })
        } catch (e) {
            alert('失敗')
        }
    }

    const editTaskAction = async (todo: ToDoDetail, task: string) => {
        try {
            await editTask({
                ...todo,
                task
            })
            setState({ ...state, command: 'RELOAD' })
        } catch (e) {
            alert('失敗')
        }
    }

    const delTaskAction = async (todo: ToDoDetail) => {
        try {
            await delTask(todo)
            setState({ ...state, command: 'RELOAD' })
        } catch (e) {
            alert('失敗')
        }
    }

    return [
        state,
        {
            addTaskAction,
            editTaskAction,
            delTaskAction
        }
    ]
}
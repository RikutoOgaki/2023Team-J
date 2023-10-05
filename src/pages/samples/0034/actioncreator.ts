import { Actions } from './reducer'

async function addTodoInner(
    memo: string
) {
    const res = await fetch('/api/todo/add-todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            memo
        })
    })

    const result = await res.json()
}

async function listTodoInner() {
    const res = await fetch('/api/todo/list-todo', {
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

export async function addTodo(dispatch: React.Dispatch<Actions>, memo: string) {
    dispatch({ actionType: 'ADD_TODO_REQUEST' })

    try {
        await addTodoInner(memo)
        const list = await listTodoInner()

        dispatch({
            actionType: 'ADD_TODO_SUCCESS',
            payload: {
                list: list
            }
        })
    } catch (e) {
        // エラーのとき
        dispatch({ actionType: 'ADD_TODO_FAILURE' })
    }
}

export async function listTodo(dispatch: React.Dispatch<Actions>) {
    dispatch({ actionType: 'LIST_TODO_REQUEST' })

    try {
        const list = await listTodoInner()

        dispatch({
            actionType: 'LIST_TODO_SUCCESS',
            payload: {
                list: list
            }
        })
    } catch (e) {
        // エラーのとき
        dispatch({ actionType: 'LIST_TODO_FAILURE' })
    }
}
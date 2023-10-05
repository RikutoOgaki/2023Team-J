import { useState, useEffect } from 'react'
import { Todo } from './types'

type State = {
    todoList: Array<Todo>,
    inMemo: string
}

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

export function useTodo(): [State, {
    addTodo: (memo: string) => void,
    listTodo: () => void
}] {
    const [state, setState] = useState<State>({
        todoList: [],
        inMemo: ''
    })

    const addTodo = async (memo: string) => {
        await addTodoInner(memo)
    }

    const listTodo = async () => {
        const list = await listTodoInner()
        setState({
            ...state,
            todoList: list
        })
    }

    return [state, {
        addTodo,
        listTodo
    }]
}
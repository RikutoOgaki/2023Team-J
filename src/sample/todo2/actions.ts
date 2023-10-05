import { ToDoDetail } from '@/sample/todo2/types'

export async function addTask(task: string) {
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

export async function editTask(todo: ToDoDetail) {
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

export async function delTask(todo: ToDoDetail) {
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

export async function listTask() {
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
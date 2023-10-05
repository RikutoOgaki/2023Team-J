import { useState } from 'react'

type Message = {
    id: number,
    message: string,
    version: number
}

type State = {
    message: string,
    list: Array<Message>
}

async function send(state: State) {
    const res = await fetch('/api/add-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(state)
    })

    const result = await res.json()
}

async function del(row: Message) {
    const res = await fetch('/api/del-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(row)
    })

    const result = await res.json()
}

async function list(state: State, setState: Function) {
    const res = await fetch('/api/list-message', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        }
    })

    const result = await res.json()

    setState({
        ...state,
        list: result.list
    })
}

export default function SampleForm0010() {
    const [state, setState] = useState({
        message: '',
        list: [] as Array<Message>
    })

    return (
        <div>
            <input type='text' value={state.message}
                placeholder='メッセージ書き込みしてください'
                onChange={(e) => setState({
                    ...state,
                    message: e.target.value
                })} />

            <input type='button' value='送信'
                onClick={() => send(state)} />

            <input type='button' value='検索'
                onClick={() => list(state, setState)} />

            {state.list.map((row) =>
                <div key={row.id}>
                    <p>{row.message}</p>
                    <input type='button' value='削除'
                        onClick={() => del(row)} />
                </div>
            )}
        </div>
    )
}
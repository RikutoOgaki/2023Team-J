import React, { useEffect } from 'react'

type Action = {
    type: string,
    payload: any | undefined
}

type Props = {
    initCount: number
}

type SampleMessage = {
    id: number,
    message: string
}

type State = {
    count: number,
    cmd: string,
    dbTime: string,
    message: string,
    messageList: Array<SampleMessage>
}

export function useReducer(props: Props): [State, React.Dispatch<Action>] {
    const initialState: State = {
        count: props.initCount,
        cmd: '',
        dbTime: '',
        message: '',
        messageList: []
    }

    const [state, dispatch] = React.useReducer((state: State, action: Action): State => {
        switch (action.type) {
            case 'PLUS': return {
                ...state,
                count: state.count + 1
            }
            case 'MINUS': return {
                ...state,
                count: state.count - 1
            }
            case 'FETCH_SUCCESS': return {
                ...state,
                count: action.payload,
                cmd: ''
            }
            case 'RELOAD': return {
                ...state,
                cmd: 'RELOAD'
            }
            case 'GET_DB_TIME': return {
                ...state,
                dbTime: action.payload
            }
            case 'EDIT_MESSAGE': return {
                ...state,
                message: action.payload
            }
            case 'LIST_MESSAGE': return {
                ...state,
                messageList: action.payload
            }
        }

        return state
    }, initialState)

    useEffect(() => {
        switch (state.cmd) {
            case 'RELOAD':
                doTestFetch(dispatch)
                doTestDb3(dispatch)
                break

        }
    }, [state.cmd])

    return [state, dispatch]
}

export async function plus(dispatch: React.Dispatch<Action>) {
    dispatch({ type: 'PLUS', payload: null })
}

export async function minus(dispatch: React.Dispatch<Action>) {
    dispatch({ type: 'MINUS', payload: null })
}

export async function doTestFetch(dispatch: React.Dispatch<Action>) {
    // fetchからのdispatch
    const res = await fetch('/api/hello', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        }
    })

    const result = await res.json()

    dispatch({ type: 'FETCH_SUCCESS', payload: result.num })
}

export async function doTestFetch2(dispatch: React.Dispatch<Action>) {
    dispatch({ type: 'RELOAD', payload: null })
}

export async function editMessage(dispatch: React.Dispatch<Action>, message: string) {
    dispatch({ type: 'EDIT_MESSAGE', payload: message })
}

export async function doTestDb1(dispatch: React.Dispatch<Action>) {
    const res = await fetch('/api/time', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        }
    })

    const result = await res.json()
    dispatch({ type: 'GET_DB_TIME', payload: result.time })
}

export async function doTestDb2(dispatch: React.Dispatch<Action>, message: string) {
    const res = await fetch('/api/addMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            message
        })
    })

    const result = await res.json()
    dispatch({ type: 'RELOAD', payload: null })
}

export async function doTestDb3(dispatch: React.Dispatch<Action>) {
    const res = await fetch('/api/listMessage', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        }
    })

    const result = await res.json()
    dispatch({ type: 'LIST_MESSAGE', payload: result.list })
}
import { useState } from 'react'

type State = {
    message: string
}

async function send(state: State,
    setState: React.Dispatch<State>) {
    const json = {
        message: state.message
    }
    const res = await fetch('/api/add-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            message: state.message
        })
    })

    console.log(res.status)

    const output = await res.json()
    setState({
        message: output.result
    })
}

async function send2(state: State, callback: Function) {
    const json = {
        message: state.message
    }
    const res = await fetch('/api/add-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            message: state.message
        })
    })

    console.log(res.status)

    const output = await res.json()

    callback(output)
}

export default function SampleForm0008() {
    const [state, setState] = useState({
        message: ''
    })

    return (
        <div>
            <input type='text' value={state.message}
                onChange={(e) => setState({
                    ...state,
                    message: e.target.value
                })} />
            <input type='button' value='SEND'
                onClick={() => {
                    send(state, setState)
                    // send2(state, (out: { result: string }) => {
                    //     setState({
                    //         message: out.result
                    //     })
                    // })
                }} />
        </div>
    )
}
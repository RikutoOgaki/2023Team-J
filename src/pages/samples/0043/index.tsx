import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

type Message = {
    id: number,
    message: string,
    version: number
}

type State = {
    message: string
    list: Array<Message>
}

export default function SampleForm43() {

    const [state, setState] = useState<State>({
        message: '',
        list: [] as Array<Message>
    })

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

    return (
        <>
            <div>
                <input type="text" value={state.message}
                    onChange={(e) => setState({
                        ...state,
                        message: e.target.value
                    })}
                />
                <button
                    onClick={() => {
                        send(state)

                        setState({
                            ...state,
                            message: ''
                        })
                    }}
                >send</button>
            </div>
        </>
    )
}
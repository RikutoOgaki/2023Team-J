import { useState } from 'react'

type State = {
    userId: string,
    pass: string,
    result: string
}

export default function SampleForm0024() {
    const [state, setState] = useState<State>({
        userId: '',
        pass: '',
        result: ''
    })

    const login = async () => {
        const res = await fetch('/api/sample/0024/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({
                userId: state.userId,
                pass: state.pass
            })
        })

        if (res.status === 200) {
            setState({
                ...state,
                result: '成功'
            })
        } else {
            setState({
                ...state,
                result: '失敗'
            })
        }
    }

    const check = async () => {
        const res = await fetch('/api/sample/0024/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({
                userId: state.userId,
                pass: state.pass
            })
        })

        const result = await res.json()
        setState({
            ...state,
            result: result.message
        })
    }

    const logout = async () => {
        const res = await fetch('/api/sample/0024/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({
            })
        })

        setState({
            ...state,
            result: ''
        })
    }

    return (
        <div>
            <input type='text' placeholder='USER ID'
                value={state.userId}
                onChange={(e) => setState({
                    ...state,
                    userId: e.target.value
                })} />

            <input type='pass' placeholder='PASS'
                value={state.pass}
                onChange={(e) => setState({
                    ...state,
                    pass: e.target.value
                })} />

            <input type='button' value='LOGIN' onClick={() => login()} />
            <input type='button' value='CHECK' onClick={() => check()} />
            <input type='button' value='LOGOUT' onClick={() => logout()} />

            <p>{state.result}</p>
        </div>
    )
}
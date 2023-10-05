import { useEffect, useState } from 'react'

type State = {
    flag: boolean
}

function TestComponent() {
    useEffect(() => {
        console.log('useEffect(mount)')

        return () => {
            console.log('useEffect(unmount)')
        }
    }, [])

    return (
        <div>XXX</div>
    )
}

export default function SampleForm0021() {
    const [state, setState] = useState<State>({
        flag: false
    })

    return (
        <div>
            <p>TEST</p>

            <input type='button'
                value={state.flag ? '表示->非表示' : '非表示->表示'}
                onClick={() => setState({
                    ...state,
                    flag: !state.flag
                })} />

            {state.flag &&
                <TestComponent />
            }
        </div>
    )
}
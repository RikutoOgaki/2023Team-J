import { useReducer } from 'react'
import { reducer } from './reducer'
import { getTime } from './actioncreater'
import { useEffect } from 'react'

export default function SampleForm44() {

    const [state, dispatch] = useReducer(reducer, {
        time: '',
        isWaiting: false
    })

    useEffect(() => {
        getTime(dispatch)
    }, [])

    return (
        <div>
            <p>{state.time}</p>
            {state.isWaiting &&
                <p>お待ちください</p>
            }
            <button
                onClick={() => {
                    getTime(dispatch)
                }}
            >Click</button>
        </div>
    )
}
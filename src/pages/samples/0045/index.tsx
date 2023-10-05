import { useEffect, useState } from 'react'
import { useReducer } from 'react'
import { reducer } from './reducer'
import { getTime } from './actioncreater'


export default function SampleForm45() {

    const [state, dispatch] = useReducer(reducer, {
        time: ''
    })

    useEffect(() => {
        getTime(dispatch)
    }, [])

    return (
        <>
            <div>
                <h1>Reducerを使って現在時間をとる</h1>
                <p>{state.time}</p>
            </div>
        </>
    )
}
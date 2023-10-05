import { useState, FocusEvent } from 'react'
import { useCustomHook } from './hooks'

export function Component(props: {
    onBlur: (e: FocusEvent<HTMLInputElement>) => void
}) {

    const [state, setLowerCaseState] = useCustomHook()



    return (
        <>
            <input type="text" value={state.value}
                onChange={(e) => setLowerCaseState(e.target.value)}
                onBlur={(e) => props.onBlur(e)}
            />
        </>
    )
}
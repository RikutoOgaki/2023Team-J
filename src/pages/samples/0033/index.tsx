import { useReducer } from "react"
import { ActionTypes, reducer } from './reducer'

export default function SampleForm0033() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <>
            <h1>useReducer</h1>
            <p>{state.count}</p>

            <button onClick={() => dispatch({ type: ActionTypes.PLUS })}>ADD</button>

            <button onClick={() => dispatch({ type: ActionTypes.MINUS })}>MINUS</button>

            <button onClick={() => dispatch({ type: ActionTypes.SET, payload: { count: 0 } })}>SET</button>
        </>
    )
}
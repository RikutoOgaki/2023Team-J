import { useCustomState } from './hooks'

export default function SampleForm0018() {
    const [state, { plus, minus }] = useCustomState()

    return (
        <div>
            <h1>カスタムフック</h1>
            <p>{state.count}</p>
            <input type='button' value='MINUS' onClick={() => minus()} />
            <input type='button' value='PLUS' onClick={() => plus()} />
        </div>
    )
}
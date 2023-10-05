import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { useReducer } from 'react'
import { edit, validate } from './actioncreator'
import { reducer } from './reducer'

export default function SampleForm0040() {
    const [state, dispatch] = useReducer(reducer, {
        inAge: '',
        errors: []
    })

    return (
        <div>
            <InputText placeholder='あなたの年齢を入力して'
                value={state.inAge}
                onChange={(e) => edit(dispatch, 'age', e.target.value)} />

            <Button label='Send' onClick={() => {
                validate(dispatch, state.inAge)
            }} />

            {(state.errors && state.errors.length > 0) &&
                <ul>
                    {state.errors.map((err) =>
                        <li>{err}</li>
                    )}
                </ul>
            }
        </div>
    )
}
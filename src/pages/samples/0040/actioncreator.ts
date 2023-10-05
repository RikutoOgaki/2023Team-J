import { Action } from './reducer'

export function edit(
    dispatch: React.Dispatch<Action>,
    editTarget: string,
    editValue: string) {
    dispatch({
        actionType: 'EDIT',
        payload: {
            editTarget,
            editValue
        }
    })
}

export async function validate(
    dispatch: React.Dispatch<Action>,
    age: string) {

    dispatch({ actionType: 'VALIDATE_REQUEST' })

    try {
        const res = await fetch('/api/sample/0040/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({
                age
            })
        })

        const result = await res.json()

        if (res.status !== 200) {
            dispatch({
                actionType: 'VALIDATE_FAILURE',
                payload: {
                    errors: result.errors
                }
            })
            return
        }

        dispatch({ actionType: 'VALIDATE_SUCCESS' })
    } catch (e) {
        dispatch({
            actionType: 'VALIDATE_FAILURE',
            payload: {
                errors: ['予期せぬエラー']
            }
        })
    }
}
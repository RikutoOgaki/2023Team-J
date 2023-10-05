
export type Action =
    {
        actionType: 'EDIT',
        payload: { editTarget: string, editValue: string }
    } |
    {
        actionType: 'VALIDATE_REQUEST'
    } |
    {
        actionType: 'VALIDATE_SUCCESS'
    } |
    {
        actionType: 'VALIDATE_FAILURE',
        payload: { errors: Array<string> }
    }

export type State = {
    inAge: string,
    errors: Array<string>
}

export function reducer(state: State, action: Action): State {
    switch (action.actionType) {
        case 'EDIT': {
            switch (action.payload.editTarget) {
                case 'age': return {
                    ...state,
                    inAge: action.payload.editValue
                }
            }
            return state
        }

        case 'VALIDATE_REQUEST': return {
            ...state,
            errors: []
        }
        case 'VALIDATE_FAILURE': return {
            ...state,
            errors: action.payload.errors
        }
    }

    return state
}
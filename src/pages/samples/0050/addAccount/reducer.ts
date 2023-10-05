export type Action =
    { actionType: 'INCERT_IDPASS_REQUEST' } |
    {
        actionType: 'INCERT_IDPASS_SUCCESS',
        payload: {
            userid: string,
            userpass: string
        }
    } |
    { actionType: 'INCERT_IDPASS_FAILURE' }

export type State = {
    userid: string,
    userpass: string,
    isWating: boolean
}

export function reducer(state: State, action: Action) {
    switch (action.actionType) {
        case 'INCERT_IDPASS_REQUEST': return {
            ...state,
            isWating: true
        }
        case 'INCERT_IDPASS_SUCCESS': return {
            ...state,
            userid: action.payload.userid,
            userpass: action.payload.userpass,
            isWating: false
        }
        case 'INCERT_IDPASS_FAILURE': return {
            ...state,
            isWating: false
        }
    }
}
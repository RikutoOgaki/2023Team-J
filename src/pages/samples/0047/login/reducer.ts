export type Action =
    {
        actionType: 'GET_ACCOUNT_REQUEST'
    } |
    {
        actionType: 'GET_ACCOUNT_SUCCESS',
        payload: {
            userid: string,
            userpass: string,
            message: string
        }
    } |
    {
        actionType: 'GET_ACCOUNT_FAILURE',
        payload: {
            message: string
        }
    }


export type State = {
    userid: string,
    userpass: string,
    message: string,
    isWating: boolean
}

export function reducer(state: State, action: Action) {
    switch (action.actionType) {
        case 'GET_ACCOUNT_SUCCESS': return {
            ...state,
            userid: action.payload.userid,
            userpass: action.payload.userpass,
            message: action.payload.message,
            isWating: true
        }
        case 'GET_ACCOUNT_REQUEST': return {
            ...state,
            isWating: false
        }
        case 'GET_ACCOUNT_FAILURE': return {
            ...state,
            message: action.payload.message,
            isWating: false
        }
    }
}

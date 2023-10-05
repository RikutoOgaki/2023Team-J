export type Action =
    { actionType: 'GET_ACCOUNT_REQUEST' } |
    {
        actionType: 'GET_ACCOUNT_SUCCESS',
        payload: {
            message: string
        }
    } |
    {
        actionType: 'GET_ACCOUNT_FAILURE',
        payload: {
            message: string
        }
    } |
    {
        actionType: 'GET_ACCOUNT_SUCESSTEXT',
        payload: {
            userid: string,
            userpass: string
        }
    }

export type State = {
    userid: string,
    userpass: string,
    message: string,
    wate: Boolean
}

export function reducer(state: State, action: Action) {
    switch (action.actionType) {
        case 'GET_ACCOUNT_SUCCESS': return {
            ...state,
            message: action.payload.message,
            wate: true
        }
        case 'GET_ACCOUNT_REQUEST': return {
            ...state,
            wate: false
        }
        case 'GET_ACCOUNT_FAILURE': return {
            ...state,
            message: action.payload.message
        }
        case 'GET_ACCOUNT_SUCESSTEXT': return {
            ...state,
            userid: action.payload.userid,
            userpass: action.payload.userpass
        }
    }
}
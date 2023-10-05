export type Action =
    { actionType: 'GET_ACCOUNT_REQUEST' } |
    { actionType: 'GET_ACCOUNT_FAILURE' } |
    { actionType: 'GET_ACCOUNT_SUCCESS' } |
    { actionType: 'GET_ACCOUNT_TEXTVALUE' }

export type State = {
    userid: string,
    userpass: string,
    messaget: string,
    isWating: boolean
}

export function reducer(state: State, action: Action) {
    switch (action.actionType) {
        case 'GET_ACCOUNT_SUCCESS': return {
            ...state,

        }
    }
}
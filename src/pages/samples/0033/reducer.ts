
export type Action =
    { type: ActionTypes.PLUS } |
    { type: ActionTypes.MINUS } |
    { type: ActionTypes.SET, payload: { count: number } }

export enum ActionTypes {
    PLUS = 'PLUS',
    MINUS = 'MINUS',
    SET = 'SET'
}

export type State = {
    count: number
}

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case ActionTypes.PLUS: return {
            ...state,
            count: state.count + 1
        }

        case ActionTypes.MINUS: return {
            ...state,
            count: state.count - 1
        }

        case ActionTypes.SET: return {
            ...state,
            count: action.payload?.count
        }
    }
}
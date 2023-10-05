import { useReducer } from 'react'

export type ACTIONTYPE =
    { type: 'LOGIN_REQUEST', payload: { userId: string, pass: string } } |
    { type: 'LOGIN_SUCCESS', payload: null } |
    { type: 'LOGIN_FAILURE', payload: null } |

    { type: 'LOGOUT_REQUEST', payload: null } |
    { type: 'LOGOUT_SUCCESS', payload: null } |
    { type: 'LOGOUT_FAILURE', payload: null } |

    { type: 'VERIFY_SESSION_REQUEST', payload: null } |
    { type: 'VERIFY_SESSION_SUCCESS', payload: { isLoggedin: boolean } } |
    { type: 'VERIFY_SESSION_FAILURE', payload: null } |

    { type: 'SHOW_MESSAGE', payload: { message: string } } |
    { type: 'HIDE_MESSAGE', payload: null }

type Props = {
    isLoggedin: boolean
}

export type State = {
    isWaiting: boolean,
    beforeVerification: boolean,
    isLoggedin: boolean,

    isVisible: boolean,
    status: number,
    header: string,
    message: string
}

export function useSystemReducer(props: Props): [State, React.Dispatch<ACTIONTYPE>] {
    const initialState: State = {
        isWaiting: false,
        beforeVerification: true,
        isLoggedin: props.isLoggedin,

        isVisible: false,
        status: 0,
        header: '',
        message: ''
    }

    const [state, dispatch] = useReducer((state: State, action: ACTIONTYPE): State => {
        switch (action.type) {
            case 'LOGIN_REQUEST': return {
                ...state,
                isWaiting: true
            }
            case 'LOGIN_SUCCESS': {
                return {
                    ...state,
                    isWaiting: false,
                    beforeVerification: false,
                    isLoggedin: true
                }
            }
            case 'LOGIN_FAILURE': {
                return {
                    ...state,
                    isWaiting: false
                }
            }

            case 'LOGOUT_REQUEST': return {
                ...state,
                isWaiting: true
            }
            case 'LOGOUT_SUCCESS': return {
                ...state,
                isWaiting: false,
                beforeVerification: true,
                isLoggedin: false
            }
            case 'LOGOUT_FAILURE': return {
                ...state,
                isWaiting: false
            }

            case 'VERIFY_SESSION_REQUEST': return {
                ...state,
                isWaiting: true,
                beforeVerification: true
            }
            case 'VERIFY_SESSION_SUCCESS': return {
                ...state,
                isWaiting: false,
                beforeVerification: false,
                isLoggedin: action.payload.isLoggedin
            }
            case 'VERIFY_SESSION_FAILURE': return {
                ...state,
                isWaiting: false,
                beforeVerification: true,
                isLoggedin: false
            }

            case 'SHOW_MESSAGE': return {
                ...state,
                isVisible: true,
                header: 'メッセージ',
                message: action.payload.message
            }
            case 'HIDE_MESSAGE': {
                return {
                    ...state,
                    isVisible: false
                }
            }
            default:
                throw new Error()
        }
    }, initialState)

    return [state, dispatch]
}
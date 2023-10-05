import { useReducer } from 'react'
import { useRouter } from 'next/router'

export type ACTIONTYPE =
    { type: 'LOGIN_REQUEST', payload: { userId: string, pass: string } } |
    { type: 'LOGIN_SUCCESS', payload: null } |
    { type: 'LOGIN_FAILURE', payload: null } |

    { type: 'LOGOUT_REQUEST', payload: null } |
    { type: 'LOGOUT_SUCCESS', payload: null } |
    { type: 'LOGOUT_FAILURE', payload: null } |

    { type: 'VERIFY_SESSION_REQUEST', payload: null } |
    { type: 'VERIFY_SESSION_SUCCESS', payload: { isLoggedin: boolean } } |
    { type: 'VERIFY_SESSION_FAILURE', payload: null }

type Props = {
    isLoggedin: boolean
}

export type State = {
    beforeVerification: boolean,
    isLoggedin: boolean
}

export function useProgressReducer(props: Props): [State, React.Dispatch<ACTIONTYPE>] {
    const initialState: State = {
        beforeVerification: true,
        isLoggedin: props.isLoggedin
    }

    const router = useRouter()

    const [state, dispatch] = useReducer((state: State, action: ACTIONTYPE): State => {
        switch (action.type) {
            case 'LOGIN_REQUEST': return {
                ...state
            }
            case 'LOGIN_SUCCESS': {
                return {
                    ...state,
                    beforeVerification: false,
                    isLoggedin: true
                }
            }
            case 'LOGIN_FAILURE': return {
                ...state
            }

            case 'LOGOUT_REQUEST': return {
                ...state
            }
            case 'LOGOUT_SUCCESS': return {
                ...state,
                beforeVerification: true,
                isLoggedin: false
            }
            case 'LOGOUT_FAILURE': return {
                ...state
            }

            case 'VERIFY_SESSION_REQUEST': return {
                ...state,
                beforeVerification: true
            }
            case 'VERIFY_SESSION_SUCCESS': return {
                ...state,
                beforeVerification: false,
                isLoggedin: action.payload.isLoggedin
            }
            case 'VERIFY_SESSION_FAILURE': return {
                ...state,
                beforeVerification: true,
                isLoggedin: false
            }
            default:
                throw new Error()
        }
    }, initialState)

    return [state, dispatch]
}
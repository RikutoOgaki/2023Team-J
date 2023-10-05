import { createContext } from 'react'
import { State as State, ACTIONTYPE } from '@/hooks/system/reducer'

export const SysContext = createContext({} as State)
export const SysDispatchContext = createContext({} as React.Dispatch<ACTIONTYPE>)
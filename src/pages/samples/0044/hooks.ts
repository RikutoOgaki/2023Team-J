import {useState} from 'react'

type State = {
    value:string
}

export function useCustomHook():[State,(value:string) => void]{
    const [state,setState] = useState({
        value:''
    })

    const setLowerCaseState = (value:string) => {
        setState({
            ...state,
            value:value.toLowerCase()
        })
    }

    return [state,setLowerCaseState]
}
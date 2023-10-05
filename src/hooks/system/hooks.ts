import { SysContext, SysDispatchContext } from '@/context/sys-context'
import { verifySession } from '@/hooks/system/actioncreator'
import { ACTIONTYPE, State } from '@/hooks/system/reducer'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

type Props = {
    redirectTo: string
}

export function useSystem(props: Props = { redirectTo: '' }): [State, React.Dispatch<ACTIONTYPE>] {
    const sysState = useContext(SysContext)
    const sysDispatch = useContext(SysDispatchContext)
    const router = useRouter()

    useEffect(() => {
        verifySession(sysDispatch)
    }, [])

    useEffect(() => {
        if (!sysState.isLoggedin && !sysState.beforeVerification && props.redirectTo) {
            router.push(props.redirectTo)
        }
    }, [sysState.isLoggedin, sysState.beforeVerification])

    return [sysState, sysDispatch]
}
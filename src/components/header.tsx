import { SysContext, SysDispatchContext } from '@/context/sys-context'
import { logout } from '@/hooks/system/actioncreator'
import styles from '@/styles/components/header.module.css'
import { useRouter } from 'next/router'
import { useContext } from 'react'

export default function Header() {
    const sysState = useContext(SysContext)
    const sysDispatch = useContext(SysDispatchContext)
    const router = useRouter()

    return (
        <div className={styles.header}>
            <p>HEADER</p>
            <div>
                {sysState.isLoggedin &&
                    <input type='button' value='LOGOUT'
                        onClick={() => logout(sysDispatch, router)} />
                }
            </div>
        </div>
    )
}
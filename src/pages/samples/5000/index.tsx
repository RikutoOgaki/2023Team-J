import { SysContext, SysDispatchContext } from '@/context/sys-context'
import { useContext } from 'react'
import { showMessage } from '@/hooks/system/actioncreator'

export default function SampleForm5000() {
    const sysState = useContext(SysContext)
    const sysDispatch = useContext(SysDispatchContext)

    return (
        <input type='button' value='メッセージ表示'
            onClick={() => {
                showMessage(sysDispatch, 'テストメッセージ')
            }} />
    )
}
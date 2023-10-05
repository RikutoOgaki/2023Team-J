import { useState } from 'react'
import styles from '@/styles/samples/0014/index.module.css'

type MenuProps = {
    flag: boolean,
    children: React.ReactNode
}

type MenuState = {
    flag: boolean
}

function Menu(props: MenuProps) {
    const [state, setState] = useState<MenuState>({
        flag: props.flag
    })

    return <div style={{ 'border': '1px solid black' }}>
        <div style={{ 'border': '1px solid black' }}
            onClick={() => setState({
                ...state,
                flag: !state.flag
            })}>click me</div>
        <div className={!state.flag ? styles.hide : undefined}>{props.children}</div>
    </div>
}

export default function SampleForm0014() {
    return (
        <div>
            <Menu flag={true}>
                <p>てへへ</p>
                <p>ああああ</p>
            </Menu>
        </div>
    )
}
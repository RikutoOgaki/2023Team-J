import { useState, useEffect } from 'react'
import styles from '@/styles/samples/0009/index.module.css'

type Props = {
    x?: number,
    y?: number
}

function Test(props: Props) {
    const [state, setState] = useState(0)

    if (props.x === undefined ||
        props.y === undefined) {
        return <p>計算出来ません</p>
    }
    return <p className={styles.hoge}>計算結果={props.x * props.y}</p>
}

export default function SampleForm0009() {
    // step1
    // step6
    const [state, setState] = useState('')

    // step2
    // step7
    useEffect(() => {
        const timerId = setInterval(() => {
            setState(new Date().toLocaleTimeString())
        }, 500)

        return () => {
            clearInterval(timerId)
        }
    }, [])

    // step3
    // step8
    return (
        <Test x={10} y={20} />
    )
}
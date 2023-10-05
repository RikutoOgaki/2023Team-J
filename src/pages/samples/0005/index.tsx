import styles from '@/styles/samples/0005/index.module.css'
import { useState } from 'react'

export default function SampleForm0005() {
    const [state, setState] = useState(false)

    return (
        <>
            <div className={styles.sticky}>
                <p className={state ? styles.red : styles.black}>Sample0005</p>
                <p onClick={() => setState(!state)}>Click</p>
            </div>

            <div className={styles.sticky + (state ? ' ' + styles.rotate : '')}>
                <p>複合スタイル</p>
            </div>
        </>
    )
}
import { useEffect, useReducer, useRef } from 'react'
import { doIntervalProc, doKeydownProc } from './actioncreator'
import styles from './index.module.css'
import { reducer } from './reducer'

export default function SampleForm0042() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        x: 0,
        y: 0,

        x2: 0,
        y2: 0
    })

    const intervalCallback = () => {
        doIntervalProc(dispatch, state)
    }

    const keydownCallback = (e: KeyboardEvent) => {
        doKeydownProc(dispatch, e, state)
    }

    const intervalCallbackRef = useRef(intervalCallback)
    const keydownCallbackRef = useRef(keydownCallback)

    useEffect(() => {
        intervalCallbackRef.current = intervalCallback
        keydownCallbackRef.current = keydownCallback
    })

    useEffect(() => {
        const timer = setInterval(() => {
            intervalCallbackRef.current()
        }, 500)

        const callback = (e: KeyboardEvent) => {
            keydownCallbackRef.current(e)
        }
        window.addEventListener('keydown', callback)

        return () => {
            clearInterval(timer)
            window.removeEventListener('keydown', callback)
        }
    }, [])

    return (
        <div>
            <p>count:{state.count}</p>
            <p>x:{state.x}</p>
            <p>y:{state.y}</p>

            <div className={styles.object} style={{
                'top': (state.y * 5) + 'rem',
                'left': (state.x * 5) + 'rem'
            }}></div>

            <div className={styles.object} style={{
                'top': (state.y2 * 5) + 'rem',
                'left': (state.x2 * 5) + 'rem'
            }}></div>
        </div>
    )
}
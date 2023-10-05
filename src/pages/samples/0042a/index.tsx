import build from 'next/dist/build'
import { useEffect, useReducer, useRef } from 'react'
import { doIntervalProc, doKeydownProc } from './actioncreator'
import styles from './index.module.css'
import { reducer } from './reducer'

const CENTER_X = 2
const CENTER_Y = 2

function buildMap(x: number, y: number, srcMap: Array<Array<number>>) {
    const newMap = new Array<Array<number>>()

    const MAX_ROWS = srcMap.length;
    const MAX_COLS = srcMap[0].length

    for (let rowIdx = 0; rowIdx < MAX_ROWS; rowIdx++) {
        const row = new Array<number>()
        newMap.push(row)

        for (let colIdx = 0; colIdx < MAX_COLS; colIdx++) {
            if (rowIdx + y >= MAX_ROWS || rowIdx + y < 0 ||
                colIdx + x >= MAX_COLS ||
                colIdx + x < 0) {
                row.push(1)
            } else {
                row.push(srcMap[rowIdx + y][colIdx + x])
            }
        }
    }
    return newMap
}

function pickMap(x: number, y: number, mapData: Array<Array<number>>) {
    const MAX_ROWS = mapData.length;
    const MAX_COLS = mapData[0].length

    if (CENTER_Y + y >= MAX_ROWS || CENTER_Y + y < 0 ||
        CENTER_X + x >= MAX_COLS ||
        CENTER_X + x < 0) {
        return 1
    }

    return mapData[CENTER_Y + y][CENTER_X + x]
}

export default function SampleForm0042() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        x: 0,
        y: 0,

        x2: 0,
        y2: 0,

        mapDataSrc: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    })

    const intervalCallback = () => {
        doIntervalProc(dispatch, state)
    }

    const keydownCallback = (e: KeyboardEvent) => {
        console.log(pickMap(state.x, state.y, state.mapDataSrc))
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

    const mapData = buildMap(state.x, state.y, state.mapDataSrc)

    return (
        <div>
            {/* <p>count:{state.count}</p>
            <p>x:{state.x}</p>
            <p>y:{state.y}</p> */}

            {mapData.map((row, rowIdx) =>
                <div key={rowIdx} className={styles.mapRow}>
                    {row.map((cell, cellIdx) =>
                        <div key={cellIdx} className={styles.mapCell}
                            style={{
                                'backgroundColor': cell === 1 ? 'gray' : 'white'
                            }}>{cell}</div>
                    )}
                </div>
            )}

            <div className={styles.object} style={{
                'top': (CENTER_Y * 5) + 'rem',
                'left': (CENTER_X * 5) + 'rem'
            }}></div>

            {/* <div className={styles.object} style={{
                'top': ((state.y2 + 2) * 5) + 'rem',
                'left': ((state.x2 + 2) * 5) + 'rem'
            }}></div> */}
        </div>
    )
}
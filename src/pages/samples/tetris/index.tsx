import { useEffect, useState } from 'react'
import styles from './index.module.css'

// TODO リファクタリング前だよ（はあと

function getColorByCellValue(cell: number) {
    switch (cell) {
        case -1: return 'rgb(121, 120, 120)'
        case -2: return 'rgb(121, 120, 120)'
        case 1: return 'rgb(93, 202, 204)'
        case 2: return 'rgb(205, 205, 66)'
        case 3: return 'rgb(141, 27, 198)'
        case 4: return 'rgb(192, 108, 39)'
        case 5: return 'rgb(1, 0, 197)'
        case 6: return 'rgb(189, 39, 26)'
        case 7: return 'rgb(94, 202, 59)'
    }
    return '#000000'
}

function BlockTable(props: {
    blockTable: Array<Array<number>>
}) {
    return (
        <>
            <table className={styles.blockTable}>
                <tbody>
                    {props.blockTable.map((row, rowIdx) =>
                        <tr key={rowIdx} className={styles.blockRow}>
                            {row.map((cell, cellIdx) =>
                                <td key={cellIdx} className={styles.block}
                                    style={{
                                        'backgroundColor': getColorByCellValue(cell)
                                    }}
                                ></td>
                            )}
                        </tr>)}
                </tbody>
            </table>
        </>
    )
}

type Block = Array<Array<number>>

const blockTypes = [
    [
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 0, 3, 0],
            [0, 3, 3, 3],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 3, 0, 0],
            [0, 3, 3, 0],
            [0, 3, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [3, 3, 3, 0],
            [0, 3, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 3, 0],
            [0, 3, 3, 0],
            [0, 0, 3, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 0, 4, 0],
            [0, 0, 4, 0],
            [0, 4, 4, 0]
        ],
        [
            [0, 0, 0, 0],
            [4, 0, 0, 0],
            [4, 4, 4, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 4, 4, 0],
            [0, 4, 0, 0],
            [0, 4, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 4, 4, 4],
            [0, 0, 0, 4],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 5, 0]
        ],
        [
            [0, 0, 0, 0],
            [5, 5, 5, 0],
            [5, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 5, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 5],
            [0, 5, 5, 5],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 6, 6],
            [0, 6, 6, 0]
        ],
        [
            [0, 0, 0, 0],
            [6, 0, 0, 0],
            [6, 6, 0, 0],
            [0, 6, 0, 0]
        ],
        [
            [0, 0, 6, 6],
            [0, 6, 6, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 6, 0],
            [0, 0, 6, 6],
            [0, 0, 0, 6]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [7, 7, 0, 0],
            [0, 7, 7, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 7, 0, 0],
            [7, 7, 0, 0],
            [7, 0, 0, 0]
        ],
        [
            [7, 7, 0, 0],
            [0, 7, 7, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 7],
            [0, 0, 7, 7],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ]
    ]
]

function createBlock(blockType: number, rotate: number) {
    return blockTypes[blockType][rotate]
}

export type State = {
    initFlag: boolean,
    blockType: number,
    rotate: number,
    x: number,
    y: number,
    keydownQueue: Array<string>,
    procCounter: number,
    blockTable: Array<Array<number>>
}

function calcMatrix(
    matrix: Array<Array<number>>,
    block: Block,
    x: number, y: number) {
    const newMatrix = matrix.map((r) => r.map((c) => c))

    for (let i = 0; i < block.length; i++) {
        for (let k = 0; k < block[i].length; k++) {
            if (i + y >= matrix.length || k + x >= matrix[0].length
                || i + y < 0 || k + x < 0) {
                continue
            }

            if (block[i][k] === 0) {
                continue
            }

            newMatrix[i + y][k + x] = block[i][k]
        }
    }

    return newMatrix
}

function checkAndBrakeBlocks(
    matrix: Array<Array<number>>) {
    const newMatrix = matrix.map((r) => r.map((c) => c))

    for (let i = 0; i < newMatrix.length; i++) {
        let cnt = 0
        for (let k = 0; k < newMatrix[i].length; k++) {
            if (newMatrix[i][k] <= 0) {
                continue
            }

            cnt++
        }
        if (cnt >= 10) {
            for (let k = 1; k < newMatrix[i].length - 1; k++) {
                newMatrix[i][k] = 0
            }

            for (let m = i - 1; m >= 0; m--) {
                for (let k = 1; k < newMatrix[i].length - 1; k++) {
                    newMatrix[m + 1][k] = newMatrix[m][k]
                }
            }
        }
    }

    return newMatrix
}

function checkCollision(
    matrix: Array<Array<number>>,
    block: Block,
    x: number, y: number) {
    for (let i = 0; i < block.length; i++) {
        for (let k = 0; k < block[i].length; k++) {
            if (i + y >= matrix.length || k + x >= matrix[0].length
                || i + y < 0 || k + x < 0) {
                continue
            }

            if (matrix[i + y][k + x] !== 0 &&
                block[i][k] !== 0) {
                // 衝突してるで!
                return matrix[i + y][k + x]
            }
        }
    }
    return 0
}

function initBlockTable() {
    const blockTable = new Array<Array<number>>()
    for (let i = 0; i < 20 + 1; i++) {
        const row = new Array<number>()
        for (let k = 0; k < 10 + 2; k++) {
            row.push(0)
        }
        blockTable.push(row)
    }
    for (let i = 0; i < 10 + 2; i++) {
        blockTable[20][i] = -1
    }
    for (let i = 0; i < 20 + 1; i++) {
        blockTable[i][0] = -2
        blockTable[i][10 + 1] = -2
    }
    return blockTable
}

export default function Tetris() {
    const [state, setState] = useState<State>({
        initFlag: false,
        blockType: 0,
        x: 0,
        y: -4,
        rotate: 0,
        keydownQueue: [],
        procCounter: 0,
        blockTable: initBlockTable()
    })

    const currentBlock = createBlock(state.blockType, state.rotate)

    const blockTable = new Array<Array<number>>()
    for (let i = 0; i < 20 + 1; i++) {
        const row = new Array<number>()
        for (let k = 0; k < 10 + 2; k++) {
            row.push(0)
        }
        blockTable.push(row)
    }
    for (let i = 0; i < 10 + 2; i++) {
        blockTable[20][i] = -1
    }
    for (let i = 0; i < 20 + 1; i++) {
        blockTable[i][0] = -2
        blockTable[i][10 + 1] = -2
    }

    const computedBlockTable = calcMatrix(
        state.blockTable,
        currentBlock,
        state.x, state.y
    )

    const handleIntervalTimer = () => {
        const newKeyQueue = [...state.keydownQueue]
        let x = state.x
        let y = state.y
        let prevX = x
        let prevY = y
        let rotate = state.rotate
        let prevRotate = rotate
        let procCounter = state.procCounter
        let blockType = state.blockType
        let blockTable = state.blockTable
        let initFlag = state.initFlag

        let isFall = false
        if (newKeyQueue.length > 0) {
            const code = newKeyQueue.pop()
            switch (code) {
                case 'ArrowLeft':
                    x = x - 1
                    break;
                case 'ArrowRight':
                    x = x + 1
                    break;
                case 'ArrowDown':
                    y = y + 1
                    isFall = true
                    break;
                case 'KeyZ':
                    rotate = rotate - 1
                    break;
                case 'KeyX':
                    rotate = rotate + 1
                    break;
            }
        }

        // ブロック回転の循環
        if (rotate < 0) {
            rotate = 3
        } else if (rotate > 3) {
            rotate = 0
        }

        // 自由落下
        // ただし、下キーの押下で既に落下していないことが条件。
        // (さもなければ、二重に2マス落下することになり、衝突判定が煩雑に)
        if (!isFall && procCounter > 15) {
            y = y + 1
            procCounter = 0
            isFall = true
        }
        procCounter++

        // 最新のブロック
        const newBlock = createBlock(blockType, rotate)

        // 衝突判定
        const collisionResult =
            checkCollision(blockTable, newBlock, x, y)

        if (collisionResult === -1 || collisionResult > 0) {
            // 地面に衝突した!
            // または
            // 自由落下 or 下キーの押下によって衝突した場合
            // (じゃないとブロックの側面に刺さる！)

            // ので、移動前に戻しつつ
            x = prevX
            y = prevY
            rotate = prevRotate

            // ブロックを積む
            if (isFall) {
                blockTable = calcMatrix(blockTable, currentBlock, x, y)

                // 次のブロックへ
                x = 4 // TODO 定数に
                y = 0
                blockType = Math.floor(Math.random() * 7)
                rotate = 0
            }
        } else if (collisionResult === -2) {
            // 側面の壁に衝突した!
            // ので、移動前に戻す
            x = prevX
            y = prevY
            rotate = prevRotate
        }

        // 横一列揃っているか判定する
        blockTable = checkAndBrakeBlocks(blockTable)

        // ゲームオーバ？
        // この時点で動作不能であればゲームオーバと見做せるでしょう？
        const block = createBlock(blockType, rotate)
        const isGameOver =
            checkCollision(blockTable, block, x, y)
        if (isGameOver) {
            console.log('GAME OVER!!')
            // ゲームリセット
            initFlag = false
        }

        setState({
            ...state,
            keydownQueue: newKeyQueue,
            x,
            y,
            procCounter,
            rotate,
            blockType,
            blockTable,
            initFlag
        })
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        setState({
            ...state,
            keydownQueue: [...state.keydownQueue, e.code]
        })
    }

    useEffect(() => {
        if (state.initFlag === false) {
            setState({
                ...state,
                blockType: Math.floor(Math.random() * 7),
                blockTable: initBlockTable(),
                initFlag: true,
                x: 4,
                y: -5,
                rotate: 0
            })
        }
    }, [state.initFlag])

    useEffect(() => {
        const timerId = setInterval(
            () => handleIntervalTimer(), 16
        )

        return () => {
            clearInterval(timerId)
        }
    }, [
        state.x,
        state.y,
        state.keydownQueue,
        state.procCounter,
        state.rotate,
        state.blockType,
        state.initFlag
    ])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [state.keydownQueue])

    return (
        <>
            <h1>React Tetris</h1>
            <BlockTable blockTable={computedBlockTable} />
            <p>Zキー/Xキー:回転、十字キー:移動</p>
        </>
    )
}
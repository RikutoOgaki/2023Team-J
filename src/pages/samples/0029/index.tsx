import { useState } from 'react'

type State = {
    // 配列の配列、つまり行・列の表
    table: Array<Array<string>>
}

export default function SampleForm0029() {
    const [state, setState] = useState<State>({
        table: []
    })

    return (
        <div>
            <p>2次元配列の追加・更新・削除</p>

            <input type='button' value='追加' onClick={() => setState({
                ...state,
                table: [
                    ...state.table,
                    ['新規セル1', '新規セル2', '新規セル3']
                ]
            })} />

            <table>
                <thead>
                    <tr>
                        <th>索引</th>
                        <th>セル1</th>
                        <th>セル2</th>
                        <th>セル3</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {state.table.map((row, idx) =>
                        <tr key={idx}>
                            <td>{idx}</td>
                            {row.map((cell, idx2) =>
                                <td key={idx2}>
                                    <input type='text' value={cell}
                                        onChange={(e) => setState({
                                            ...state,
                                            table: state.table.map((wkRow, wkIdx) => idx === wkIdx ?
                                                wkRow.map((wkCell, wkIdx2) => wkIdx2 === idx2 ?
                                                    e.target.value : wkCell
                                                )
                                                : wkRow
                                            )
                                        })} />
                                </td>)}
                            <td>
                                <input type='button' value='削除' onClick={() => setState({
                                    ...state,
                                    table: state.table.filter((wkRow, wkIdx) => idx !== wkIdx)
                                })} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}
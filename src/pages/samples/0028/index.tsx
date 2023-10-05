import { useState } from 'react'

type State = {
    list: Array<string>
}

export default function SampleForm0028() {
    const [state, setState] = useState<State>({
        list: []
    })

    return (
        <div>
            <p>1次元配列の追加・更新・削除</p>

            <input type='button' value='追加' onClick={() => setState({
                ...state,
                list: [
                    ...state.list,
                    '新規データ'
                ]
            })} />

            <table>
                <thead>
                    <tr>
                        <th>索引</th>
                        <th>値</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {state.list.map((v, idx) =>
                        <tr key={idx}>
                            <td>{idx}</td>
                            <td>
                                <input type='text' value={v}
                                    onChange={(e) => setState({
                                        ...state,
                                        list: state.list.map((v, idx2) => idx === idx2 ? e.target.value : v)
                                    })} />
                            </td>
                            <td>
                                <input type='button' value='削除' onClick={() => setState({
                                    ...state,
                                    list: state.list.filter((v, idx2) => idx !== idx2)
                                })} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}
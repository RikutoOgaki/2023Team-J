import { useState } from 'react'

type Item = {
    id: number,
    label: string
}

type SampleState = {
    list: Array<Item>
}

export default function SampleForm0017() {
    const [state, setState] = useState<SampleState>({
        list: [
            { id: 1, label: 'sample1' },
            { id: 2, label: 'sample2' },
            { id: 3, label: 'sample3' }
        ]
    })

    return (
        <div>
            <p>state内にある配列の部分更新</p>
            {state.list.map((v) => <div key={v.id}>
                <input type='text' value={v.label}
                    onChange={(e) => {
                        setState({
                            ...state,
                            list: state.list.map((x) =>
                                v.id === x.id ?
                                    { ...x, label: e.target.value } : x
                            )
                        })
                    }} />
                <input type='button' value='JSON出力'
                    onClick={() => {
                        console.log(v)
                    }} />
            </div>)}
        </div>
    )
}
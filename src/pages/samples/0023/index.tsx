import { useState } from 'react'
import { Calendar } from './calendar'

type State = {
    year: string,
    month: string
}

export default function SampleForm0023() {
    // 現在日付取得。
    // 不定値だがStateの初期化(1度しか動作しない)でのみ使用するから問題なし。
    const currentDate = new Date()
    const [state, setState] = useState<State>({
        year: String(currentDate.getFullYear()),
        month: String(currentDate.getMonth() + 1)
    })

    return (
        <div>
            <div>
                <input type='text' value={state.year}
                    onChange={(e) => setState({
                        ...state,
                        year: e.target.value
                    })} />
                <input type='text' value={state.month}
                    onChange={(e) => setState({
                        ...state,
                        month: e.target.value
                    })} />
            </div>
            <Calendar year={state.year} month={state.month} />
        </div>
    )
}
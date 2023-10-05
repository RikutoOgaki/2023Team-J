
type Props = {
    year: string,
    month: string
}

function convertIdxByDay(day: number) {
    if (day === 0) {
        // 0:日曜日だけ特別扱い
        return 6
    }
    return day - 1
}

export function Calendar(props: Props) {
    const numYear = parseInt(props.year)
    const numMonth = parseInt(props.month)
    const date = new Date(numYear, numMonth - 1, 1)

    // 0:日,1:月, 2:火,3:水...
    const columns = ['月', '火', '水', '木', '金', '土', '日']
    const table = [
        new Array(7).fill(''),
        new Array(7).fill(''),
        new Array(7).fill(''),
        new Array(7).fill(''),
        new Array(7).fill(''),
        new Array(7).fill('')
    ]

    const targetMonth = date.getMonth()
    let rowIdx = 0;
    while (date.getMonth() === targetMonth) {
        table[rowIdx][convertIdxByDay(date.getDay())] = String(date.getDate())

        if (date.getDay() === 0) {
            // 0:日曜日なら終端に来たとみなす
            rowIdx++
        }

        date.setDate(date.getDate() + 1)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((col, idx) =>
                            <th key={idx}>{col}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {table.map((row, idx) =>
                        <tr key={idx}>
                            {row.map((cell, idx) =>
                                <td key={idx}>{cell}</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
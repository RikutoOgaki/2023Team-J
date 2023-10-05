
export default function SampleForm0006() {
    const list = [1, 2, 3, 4]

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>COLUMN</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((v, idx) =>
                        <tr key={idx}>
                            <td>{v}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
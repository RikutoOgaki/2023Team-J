
export function Component(props: {
    count: number,
    onClickAdd: () => void,
    onClickMinus: () => void
}) {
    return (
        <>
            <p>{props.count}</p>

            <button onClick={() => props.onClickAdd()}>ADD</button>

            <button onClick={() => props.onClickMinus()}>MINUS</button>
        </>
    )
}

export function Panel(props: {
    children?: React.ReactNode,
    header: string
}) {
    return (
        <div>
            <div>{props.header}</div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

type Props = {
    style: React.CSSProperties
}

function Component(props: Props) {
    return (
        <div style={props.style}>
            <p>Hello</p>
        </div>
    )
}

export default function Hoge() {
    return (
        <div>
            <Component style={{ 'color': 'red' }} />
        </div>
    )
}
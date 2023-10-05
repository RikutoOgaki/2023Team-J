
type SampleComponentProps = {
    children: React.ReactNode
}

export function SampleComponent(props: SampleComponentProps) {
    return <div style={{ 'border': '1px solid #000000' }}>
        {props.children}
    </div>
}

export function SampleComponent2() {
    return <p>Hello</p>
}
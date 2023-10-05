
type Node = {
    value: string,
    nodeList: Array<Node>
}

function TreeComponent(props: {
    node: Node,
    depth: number
}) {
    return (
        <>
            <p style={{ 'marginLeft': (props.depth * 2) + 'em' }}>{props.node.value}</p>

            {props.node.nodeList.length !== 0 &&
                props.node.nodeList.map((v) =>
                    <TreeComponent node={v} depth={props.depth + 1} />)}
        </>
    )
}

export default function Page() {
    const src = {
        value: 'ROOT',
        nodeList: [
            {
                value: '子供1',
                nodeList: [
                    {
                        value: '子供1の子供',
                        nodeList: [
                            {
                                value: '子供1の子供のさらに子供',
                                nodeList: []
                            }
                        ]
                    }
                ]
            },
            {
                value: '子供2',
                nodeList: []
            }
        ]
    }

    return (
        <div>
            <TreeComponent node={src} depth={0} />
        </div>
    )
}
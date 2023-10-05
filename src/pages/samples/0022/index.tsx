import { useState, useEffect } from 'react'

type BoxState = {
    grabFlag: boolean,
    x: number,
    y: number,
    prevX: number,
    prevY: number
}

function Box() {
    const [state, setState] = useState<BoxState>({
        //false: つかんでない。 true:つかんでる
        // (名前がク●だと、こんなコメントが必要)
        grabFlag: false,
        x: 0,
        y: 0,
        prevX: 0,
        prevY: 0
    })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (state.grabFlag) { // state.grabFlag === trueの省略形
                // マウスの移動量を算出（前回のマウス位置より）
                const diffX = e.clientX - state.prevX
                const diffY = e.clientY - state.prevY

                // マウスの移動量をBoxのx/yに加算
                setState({
                    ...state,
                    x: state.x + diffX,
                    y: state.y + diffY,
                    prevX: e.clientX,
                    prevY: e.clientY
                })
            }
            console.log(e.clientX + '/' + e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [state])

    const boxStyle = {
        'position': 'absolute',
        'left': state.x + 'px',
        'top': state.y + 'px',
        'width': '5em',
        'height': '5em',
        'backgroundColor': 'rgb(255,128,0)' // #ff8000
    } as React.CSSProperties

    return (
        <div style={boxStyle}
            onMouseDown={(e) => setState({
                ...state,
                grabFlag: true,
                prevX: e.clientX,
                prevY: e.clientY,
            })}

            onMouseUp={() => setState({
                ...state,
                grabFlag: false
            })}></div>
    )
}

export default function SampleForm0022() {

    return (
        <div>
            <Box />
        </div>
    )
}
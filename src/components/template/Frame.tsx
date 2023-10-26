import { ReactNode } from "react";

type Frame = {
    children: ReactNode
}

export function Frame({ children }: Frame) {
    return (
        <>
            <div style={{
                width: '100%',
                height: '100%',
                padding: '10vh 40px'
            }}>
                {children}
            </div>
        </>
    )
}


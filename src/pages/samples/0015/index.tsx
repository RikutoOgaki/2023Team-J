import { SampleComponent, SampleComponent2 } from '@/components/sample/sample-component'

export default function SampleForm0015() {
    return (
        <div>
            <p>外部コンポーネントサンプル</p>
            <SampleComponent>
                <p>Hello !!</p>
            </SampleComponent>
            <SampleComponent2 />
        </div>
    )
}

// https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API

export default function SampleForm0013() {
    return (
        <div>
            <p draggable='true'>ドラッグしてね</p>

            <div
                onDrop={() => {
                    console.log('drop')
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                    console.log('drag over')
                }}>
                <p>ドロップしてね</p>
            </div>
        </div>
    )
}
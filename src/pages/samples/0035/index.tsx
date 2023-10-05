import { useRef, useState } from 'react'

export default function SampleForm0035() {
    const [state, setState] = useState({
        fileName: ''
    })
    const fileRef = useRef<HTMLInputElement>(null)

    return (
        <div>
            <input ref={fileRef} type='file' />

            <button onClick={() => {
                const upload = async () => {
                    if (!(fileRef.current && fileRef.current.files)) {
                        // TODO 何らかのエラー処理
                        return
                    }

                    const formData = new FormData()
                    // ファイル
                    formData.append('sampleFile', fileRef.current.files[0])
                    // テキストも可能
                    formData.append('sampleText', 'Hello')

                    const res = await fetch('/api/sample/0035/upload', {
                        method: 'POST',
                        headers: {
                            'Pragma': 'no-cache',
                            'Cache-Control': 'no-cache'
                        },
                        body: formData
                    })

                    const result = await res.json()
                    setState({
                        ...state,
                        fileName: result.fileName
                    })
                }

                upload()
            }}>UPLOAD</button>

            <div>
                <img src={'/api/sample/0035/get-file?fileName=' + state.fileName} />
            </div>
        </div>
    )
}
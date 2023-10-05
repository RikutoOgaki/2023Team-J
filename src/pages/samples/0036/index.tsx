
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises
export default function SampleForm0036() {
    return (
        <button onClick={() => {
            console.log('STEP1')

            const fnc = async () => {
                await new Promise((resolve, rejects) => {
                    setTimeout(() => {
                        console.log('STEP2')
                        resolve('成功!!')
                    }, 1000)
                })

                console.log('STEP3')
            }
            fnc()

            // new Promise((resolve, rejects) => {
            //     setTimeout(() => {
            //         console.log('STEP2')
            //         resolve('成功!!')
            //     }, 1000)
            // }).then((v) => {
            //     console.log('STEP3:' + v)
            // }).catch((err) => {
            //     console.log('err!!:' + err);
            // })

            console.log('????')
        }}>TEST</button>
    )
}
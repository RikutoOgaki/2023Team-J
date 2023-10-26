import { useState, } from 'react'
import { Footer } from '@/components/template/Footer'
import { Header } from '@/components/template/Header'
import { Frame } from '@/components/template/Frame'
import style from '@/styles/useHomeChoice/index.module.scss'

type State = {
    starthome: string,
    endhome: string,
    time: string
}

export default function UseHomeChoice() {

    const [state, setState] = useState<State>({
        starthome: '',
        endhome: '',
        time: ''
    })


    return (
        <>
            <Frame>
                <Header />
                <div className={style.main}>
                    <div className={style.explanation}>
                        <p>
                            出発駅と到着駅を入力し、<br />
                            利用になる目安の時間帯を入力してください
                        </p>
                    </div>
                    <div className={style.choice}>
                        <div className={style.choicebox}>
                            <div className={style.addErea}>
                                <p className={style.text}>出発駅</p>
                                <button className={style.addBtn}>＋追加</button>
                            </div>
                            {state.starthome.length > 0 ?
                                <div>
                                    {state.starthome}
                                </div>
                                :
                                <div>
                                    <p>「＋追加」ボタンをタップして出発駅を追加</p>
                                </div>
                            }
                        </div>
                        <div className={style.choicebox}>
                            <div className={style.addErea}>
                                <p className={style.text}>到着駅</p>
                                <button className={style.addBtn}>＋追加</button>
                            </div>
                            {state.endhome.length > 0 ?
                                <div>
                                    {state.time}
                                </div>
                                :
                                <div>
                                    <p>「＋追加」ボタンをタップして出発駅を追加</p>
                                </div>
                            }
                        </div>
                        <div className={style.choicebox}>
                            <div className={style.addErea}>
                                <p className={style.text}>搭乗時間</p>
                                <button className={style.addBtn}>＋追加</button>
                            </div>
                            {state.time.length > 0 ?
                                <div>
                                    {state.time}
                                </div>
                                :
                                <div>
                                    <p>「＋追加」ボタンをタップして出発駅を追加</p>
                                </div>
                            }
                        </div>
                        <div className={style.search}>
                            <button className={style.searchBtn}>検索</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </Frame>
        </>
    )
}
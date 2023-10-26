import { Footer } from '@/components/template/Footer'
import { Header } from '@/components/template/Header'
import { Frame } from '@/components/template/Frame'
import style from '@/styles/useHomeChoice/index.module.scss'

export default function UseHomeChoice() {
    return (
        <>
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
                                <div>
                                    <p>「＋追加」ボタンをタップして出発駅を追加</p>
                                </div>
                            </div>
                            <div className={style.choicebox}>
                                <div className={style.addErea}>
                                    <p className={style.text}>到着駅</p>
                                    <button className={style.addBtn}>＋追加</button>
                                </div>
                                <div>
                                    <p>「＋追加」ボタンをタップして到着駅を追加</p>
                                </div>
                            </div>
                            <div className={style.choicebox}>
                                <div className={style.addErea}>
                                    <p className={style.text}>搭乗時間</p>
                                    <button className={style.addBtn}>＋追加</button>
                                </div>
                                <div>
                                    <p>「＋追加」ボタンをタップして搭乗時間を追加</p>
                                </div>
                            </div>
                            <div className={style.search}>
                                <button className={style.searchBtn}>検索</button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </Frame>
            </>
        </>
    )
}
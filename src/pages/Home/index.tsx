import { useState, useEffect } from 'react'
import { Frame } from '@/components/template/Frame'
import { Header } from '@/components/template/Header'
import { Footer } from '@/components/template/Footer'
import { Modal } from '@/components/template/Modal'
import style from '@/styles/Home/index.module.scss'

export default function Sample03() {

    const [listItem, setListItem] = useState([
        { start: '大阪梅田', end: '京都河原町' },
        { start: '大阪', end: '天王寺' },
        { start: '大阪', end: '天王寺' },
    ])

    const [flg, setFlg] = useState(false)

    // Modalを閉じる関数
    const CloseModal = () => {
        setFlg(false)
    }

    // Modalを常に表示するための関数
    const OpenModal = () => {
        setFlg(true)
    }

    return (
        <>
            <div className={style.wrap}>
                <Header />
                <main className={style.main}>
                    <div className={style.clockBox}>
                        <p className={style.time}>18:23
                            <span
                                className={style.error}
                                onClick={() => OpenModal()}
                            >!</span>
                        </p>
                        <p><span>次発</span>8:35分発</p>
                    </div>
                    <div className={style.registrationBox}>
                        <p>マイルート</p>
                        <div className={style.inputBox}>
                            <label className={style.label}>出発駅</label>
                            <input
                                type="text"
                                className={style.input}
                            // onChange={()} 出発駅の入力内容を変更する
                            />
                        </div>
                        <span className={style.via}>経由駅</span>
                        <div className={style.inputBox}>
                            <label className={style.label}>到着駅</label>
                            <input
                                type="text"
                                className={style.input}
                            // onChange={()} 到着駅の入力内容を変更する
                            />
                        </div>
                        <button className={style.btn}>マイルート変更</button>
                    </div>
                    <div className={style.rootBox}>
                        <div className={style.rootItem}>
                            <p>ルートリスト</p>
                            <div className={style.rootList}>
                                {listItem.map((v, idx) =>
                                    <div key={idx} className={style.item}>
                                        {v.start} ←→ {v.end}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>

            {flg &&
                <Modal isClose={CloseModal} isOpen={flg}>
                    <div className={style.modalItem}>
                        <div className={style.lineStyle}></div>
                        <div className={style.itemHead}></div>
                        <div className={style.mainItem}>
                            <p className={style.delayContent}>
                                <span className={style.delayText}>遅れが発生しています</span><br />
                                8:04分ごろ JR環状線<br />
                                森ノ宮駅 〜 京橋駅間で<br />
                                線路トラブルが発生。<br />
                                <span className={style.delayTime}>約20分</span><br />
                                の遅れが出ています。
                            </p>
                        </div>
                        <div className={style.itemFoot}></div>
                    </div>
                </Modal>
            }
        </>
    )
}
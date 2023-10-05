import style from '@/styles/samples/0047/index.module.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function SampleForm0047() {
    return (
        <>
            <div className={style.wrap}>
                <Header />
                <main>
                    <div className={style.contents}></div>
                    <div className={style.wrapbox}>
                        <section>
                            <div className={style.secbox}>
                                <div className={style.secimg}>
                                    <figure className={style.mainImg}>
                                        <img src="/img/carimg1.jpg" alt="" className={style.carimg} />
                                    </figure>
                                </div>
                                <div className={style.sectext}>
                                    <div className={style.textbox}>
                                        <h2>愛され続けるために。</h2>
                                        <p className={style.text}>たくさんの車があります。<br />たくさんの車があります。<br />たくさんの車があります。たくさんの車があります。</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className={style.flexcontents}>
                                <div className={style.box}>
                                    <figure className={style.flexicon}>
                                        <img src="/img/boxcarimg.jpg" alt="" className={style.fleximg} />
                                    </figure>
                                    <h3>相談しやすい。</h3>
                                    <p>小さなことから大きなことまで、どんな悩みごとでも相談してくれる</p>
                                </div>
                                <div className={style.box}>
                                    <figure className={style.flexicon}>
                                        <img src="/img/boxcarimg.jpg" alt="" className={style.fleximg} />
                                    </figure>
                                    <h3>徹底してくれる。</h3>
                                    <p>細かな部分までも手を抜かずこだわり続ける。</p>
                                </div>
                                <div className={style.box}>
                                    <figure className={style.flexicon}>
                                        <img src="/img/boxcarimg.jpg" alt="" className={style.fleximg} />
                                    </figure>
                                    <h3>お客様を第一に。</h3>
                                    <p>お客様のご要望にはできる限り答えお客様にとって最高のものにする。</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
import style from './merchandise.module.css'
import { useRouter } from 'next/router'

export default function Merchandise() {

    const router = useRouter()

    return (
        <>
            <section className={style.sec}>
                <div className={style.box}>
                    <div className={style.gridbox}>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                        <article>
                            <figure className={style.fig}>
                                <img src="" alt="" className={style.img} />
                            </figure>
                            <h3>TOYOTA</h3>
                            <p className={style.context}>一番人気！</p>
                        </article>
                    </div>
                    <div className={style.btnbox}>
                        <p onClick={() => router.push('/samples/0050/Merchandist')}>SHOW MORE</p>
                    </div>
                </div>
            </section>
        </>
    )
}
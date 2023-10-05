import style from './companyoverview.module.css'

export default function Companyoverview() {
    return (
        <>
            <section className={style.sec}>
                <div className={style.box}>
                    <div className={style.text}>
                        <h3>会社概要</h3>
                        <p>
                            たくさんの人に自分に合ったいい車を見つけてほしい。<br />
                            それを会社の理念に置き、日々精進しています。
                        </p>
                    </div>
                    <div className={style.anybox}>

                    </div>
                </div>
            </section>
        </>
    )
}
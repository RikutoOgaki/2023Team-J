import style from './footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={style.foot}>
                <div className={style.maintext}>
                    <h3>ReactCar</h3>
                </div>
                <div className={style.contentsbox}>
                    <div className={style.company}>
                        <h4>会社関係</h4>
                        <ul>
                            <li><a href="/samples/0050">商品</a></li>
                            <li><a href="/samples/0050">お問い合わせ</a></li>
                            <li><a href="/samples/0050">店舗情報</a></li>
                        </ul>
                    </div>
                    <div className={style.macar}>
                        <h4>メーカー</h4>
                        <ul>
                            <li><a href="/samples/0050/Merchandist/Honda">HONDA</a></li>
                            <li><a href="/samples/0050/Merchandist/Nissan">NISSAN</a></li>
                            <li><a href="/samples/0050/Merchandist/Toyota">TOYOTA</a></li>
                        </ul>
                    </div>
                </div>
                <p><small>Carpage &copy; 2023 Ink</small></p>
            </footer>
        </>
    )
}
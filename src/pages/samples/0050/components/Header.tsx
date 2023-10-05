import style from './header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header className={style.head}>
                <h1 className={style.title}>
                    <Link href={'/samples/0050'} className={style.link}>
                        ReactCar
                    </Link>
                </h1>
                <ul className={style.ul}>
                    <li><a href="/">商品</a></li>
                    <li><a href="/">お問い合わせ</a></li>
                    <li><a href="/">店舗情報</a></li>
                </ul>
            </header>
        </>
    )
}
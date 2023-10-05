import Link from 'next/link'
import style from './header.module.css'
import { useState } from 'react'

export function Header() {

    const [state, setState] = useState(false)
    const handleMenuOpen = () => {
        setState(!state)
    }

    return (
        <>
            <header className={style.headerwrap}>
                <nav className={style.nav}>
                    {/* <button >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button> */}
                    <ul className={style.LinkUl}>
                        <Link href={'/'}><li className={style.list}>logo</li></Link>
                        <Link href={'/'}><li className={style.list}>商品</li></Link>
                        <Link href={'/'}><li className={style.list}>お問い合わせ</li></Link>
                        <Link href={'/'}><li className={style.list}>ご質問</li></Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}
import { useState } from 'react'
import Link from 'next/link'
import style from './header.module.css'

export function Header() {
    return (
        <>
            <header>
                <div className={style.wrap}>
                    <ul className={style.list}>
                        <Link href={'/'}><li className={style.lis1}>logo</li></Link>
                        <Link href={'/'}><li className={style.lis}>企業</li></Link>
                        <Link href={'/'}><li className={style.lis}>商品・サービス</li></Link>
                        <Link href={'/'}><li className={style.lis}>よくあるご質問</li></Link>
                        <Link href={'/'}><li className={style.lis}>お問い合わせ</li></Link>
                    </ul>
                </div>
            </header>
        </>
    )
}
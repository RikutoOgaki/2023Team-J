import Image from 'next/image'
import style from '@/styles/components/template/header.module.scss'

export function Header() {
    return (
        <>
            <header className={style.head}>
                <figure className={style.fig}>
                    <Image src={''} alt='logo' className={style.logo} />
                </figure>
            </header>
        </>
    )
}
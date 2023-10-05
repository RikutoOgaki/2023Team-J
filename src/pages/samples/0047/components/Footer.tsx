import style from './footer.module.css'
import Link from 'next/link'

export function Footer() {
    return (
        <>
            <footer>
                <div className={style.footerwrap}>
                    <div className={style.textarea}>
                        <h3>logo</h3>
                        <p>株式会社○○○○</p>
                    </div>
                    <div className={style.listflex}>
                        <ul className={style.list}>
                            <Link href={'/'}><li className={style.lis}>ああああ</li></Link>
                            <Link href={'/'}><li className={style.lis}>いいいいい</li></Link>
                            <Link href={'/'}><li className={style.lis}>うううううう</li></Link>
                        </ul>
                        <ul className={style.list}>
                            <Link href={'/'}><li className={style.lis}>ええ</li></Link>
                            <Link href={'/'}><li className={style.lis}>おおお</li></Link>
                            <Link href={'/'}><li className={style.lis}>かかか</li></Link>
                            <Link href={'/'}><li className={style.lis}>きききき</li></Link>
                            <Link href={'/'}><li className={style.lis}>けけけけけ</li></Link>
                            <Link href={'/'}><li className={style.lis}>くくくく</li></Link>
                        </ul>
                        <ul className={style.list}>
                            <Link href={'/'}><li className={style.lis}>ささささささ</li></Link>
                            <Link href={'/'}><li className={style.lis}>しししし</li></Link>
                            <Link href={'/'}><li className={style.lis}>すすすす</li></Link>
                            <Link href={'/'}><li className={style.lis}>せせせせ</li></Link>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
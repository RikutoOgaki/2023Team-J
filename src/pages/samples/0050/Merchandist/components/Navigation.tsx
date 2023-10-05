import style from './navigation.module.css'

export default function Navi() {
    return (
        <>
            <nav className={style.nav}>
                <ul className={style.ul}>
                    <h1 ><a href="/samples/0050">ReactCar 商品一覧</a></h1>
                    <li><a href="/samples/0050">TOP</a></li>
                    <li><a href="/samples/0050/Merchandist/Toyota">TOYOTA</a></li>
                    <li><a href="/samples/0050/Merchandist/Honda">HONDA</a></li>
                    <li><a href="/samples/0050/Merchandist/Nissan">NISSAN</a></li>
                </ul>
            </nav>
        </>
    )
}
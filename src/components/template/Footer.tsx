import { FaTrainSubway } from 'react-icons/fa6'// 電車のロゴ
import { MdOutlineAppRegistration } from 'react-icons/md'// 登録のロゴ
import { FaSearch } from 'react-icons/fa' // 検索のロゴ
import { IoMdSettings } from 'react-icons/io'// 設定のロゴ
import style from '@/styles/components/template/footer.module.scss'

export function Footer() {
    return (
        <>
            <footer className={style.foot}>
                <div
                    className={style.iconBox}
                    onClick={() => location.href = '/samples/02'}
                >
                    <FaTrainSubway className={style.icon} />
                    <span>ルート</span>
                </div>
                <div className={style.iconBox}>
                    <MdOutlineAppRegistration className={style.icon} />
                    <span>登録</span>
                </div>
                <div className={style.iconBox}>
                    <FaSearch className={style.icon} />
                    <span>検索</span>
                </div>
                <div className={style.iconBox}>
                    <IoMdSettings className={style.icon} />
                    <span>設定</span>
                </div>
            </footer>
        </>
    )
}
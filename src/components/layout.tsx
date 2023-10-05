import styles from '@/styles/components/layout.module.css'
import Footer from './footer'
import Header from './header'

type Props = {
    children?: React.ReactNode
}

export default function Layout(props: Props) {
    return (
        <>
            <Header />
            <div className={styles.frame}>
                <main>{props.children}</main>
            </div>
            <Footer />
        </>
    )
}
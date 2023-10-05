import { ProgressSpinner } from 'primereact/progressspinner'
import styles from '@/styles/components/progress.module.css'
import { BlockUI } from 'primereact/blockui';

export function Progress() {
    return (
        <>
            <BlockUI />
            <div className={styles.overlay}>
                <div className={styles.progress}>
                    <ProgressSpinner />
                </div>
            </div>
        </>
    )
}
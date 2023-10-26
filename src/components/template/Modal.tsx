import { useState, useEffect, ReactNode } from 'react'
import style from '@/styles/components/template/modal.module.scss'

type Props = {
    children: ReactNode,
    isClose: () => void
    isOpen: boolean
}

export function Modal({ isOpen, isClose, children }: Props) {

    if (!isOpen) {
        return null
    }

    const handleModalClick = (e: React.MouseEvent) => {


        if (e.target === e.currentTarget) {
            isClose()
        }
    }

    return (
        <div
            className={style.modalWrap}
            onClick={handleModalClick}
        >
            {children}
        </div>

    )
}
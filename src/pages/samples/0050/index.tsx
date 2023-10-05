import { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/MainBijual'
import Company from './components/Companyoverview'
import Normally from './components/Normally'
import Merchandist from './components/Merchandise'
import Footer from './components/Footer'

export default function SampleForm0050() {
    return (
        <>
            <Header />
            <main>
                <Main />
                <Company />
                <Normally />
                <Merchandist />
            </main>
            <Footer />
        </>
    )
}
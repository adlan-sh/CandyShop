import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Modal from '../components/modal/Modal'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Modal />
        </>
    )
}

export default Layout
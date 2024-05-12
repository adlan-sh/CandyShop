import React from 'react'
import Bestsellers from '../bestsellers/Bestsellers'
import Gifts from '../gifts/gifts'
import PopularTastes from '../popular-tastes/PopularTastes'
import Advantages from '../../advantages/Advantages'

const Main = () => {
    return (
        <main className="main-container">
            <h1 className="visually-hidden">Продажа мороженого с доставкой</h1>
            <Bestsellers />
            <Gifts />
            <PopularTastes />
            <Advantages />
        </main>
    )
}

export default Main
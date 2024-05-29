import React, { useState } from 'react'
import "./bestsellers.scss"
import caramelIceCream from "../../images/caramel-ice-cream.png"
import caramelIceCreamMicro from "../../images/caramel-ice-cream-micro.png"
import strawberryIceCream from "../../images/strawberry-ice-cream.png";
import strawberryIceCreamMicro from "../../images/strawberry-ice-cream-micro.png";
import creamyIceCream from "../../images/creamy-ice-cream.png"
import creamyIceCreamMicro from "../../images/creamy-ice-cream-micro.png"
import Contacts from '../contacts/Contacts';

const Bestsellers = () => {
    const themes = ["#FCC850", "#69A9FF", "#FEAFC3"];
    const currentItemThemes = ["#FCDC92", "#9FC8FF", "#FFCBD8"];
    return (
        <section className="bestsellers">
            <div className="bestseller-lead-description">
                <h2 className="bestseller-title">Карамельный пломбир с&nbsp;маршмеллоу</h2>
                <p className="bestseller-description">Необычный сладкий десерт с карамельным<br />
                    топпингом и кусочками зефира завоюет<br />
                    сердца сладкоежек всех возрастов.
                </p>
                <button className="main-button bestseller-button" type="button">Заказать</button>
            </div>
            <ul className="bestseller-list">
                <li className="bestseller-item bestseller-item-current">
                    <div className='bestseller-item-current-theme'>
                    </div>
                    {/* <button className="bestseller-button-arrow" type="button">
                        <span className="visually-hidden">Посмотреть предыдущее мороженое</span>
                    </button> */}
                    <img src={caramelIceCream} width={306} height={507} alt="Карамельное мороженое" />
                    {/* <button className="bestseller-button-arrow" type="button">
                        <span className="visually-hidden">Посмотреть следующее мороженое</span>
                    </button> */}
                </li>
                {/* <li className="bestseller-item">
                    <img style={{ opacity: 0.5 }} src={strawberryIceCream} width={66} height={250} alt="Клубничное мороженое" />
                </li>
                <li className="bestseller-item">
                    <img style={{ opacity: 0.5 }} src={creamyIceCream} width="66" height="150" alt="Сливочное мороженое" />
                </li> */}
            </ul>
            <ul className="bestseller-slider">
                {/* <li className="bestseller-slider-item">
                    <a href="index-pink.html" tabIndex={-1} >
                        <button className="bestseller-slider-button">
                            <span className="visually-hidden">Первый хит продаж</span>
                        </button>
                    </a>
                </li>
                <li className="bestseller-slider-item">
                    <a href="index-blue.html" tabIndex={-1}>
                        <button className="bestseller-slider-button">
                            <span className="visually-hidden">Второй хит продаж</span>
                        </button>
                    </a>
                </li>
                <li className="bestseller-slider-item">
                    <button className="bestseller-slider-button bestseller-slider-button-current">
                        <span className="visually-hidden">Третий хит продаж</span>
                    </button>
                </li> */}
            </ul>
            <ul className="bestseller-contacts">
                <Contacts />
            </ul>
        </section>
    )
}

export default Bestsellers
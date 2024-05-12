import React, { useState } from 'react'
import "./bestsellers.scss"
import caramelIceCream from "../../images/caramel-ice-cream.png"
import caramelIceCreamMicro from "../../images/caramel-ice-cream-micro.png"
import strawberryIceCream from "../../images/strawberry-ice-cream.png";
import strawberryIceCreamMicro from "../../images/strawberry-ice-cream-micro.png";
import creamyIceCream from "../../images/creamy-ice-cream.png"
import creamyIceCreamMicro from "../../images/creamy-ice-cream-micro.png"
import Contacts from '../contacts/Contacts';


const useCarousel = () => {

}


const Bestsellers = () => {
    const [height, setHeight] = useState(66);
    const totalWidth = 610;
    const [MainThemeColorIndex, setMainThemeColorIndex] = useState(0);
    const themes = ["#FCC850", "#69A9FF", "#FEAFC3"];
    const currentItemThemes = ["#FCDC92", "#9FC8FF", "#FFCBD8"];
    return (
        <section className="bestsellers">
            <div className='globalTheme' style={{ backgroundColor: themes[MainThemeColorIndex] }}></div>
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
                    <div className='bestseller-item-current-theme'
                        style={{ backgroundColor: currentItemThemes[MainThemeColorIndex] }}>
                    </div>
                    <img src={caramelIceCream} width={306} height={507} alt="Карамельное мороженое" />
                </li>
            </ul>
            <ul className="bestseller-slider">
                <li className="bestseller-slider-item">

                </li>
            </ul>
            <ul className="bestseller-contacts">
                <Contacts />
            </ul>
        </section>
    )
}

export default Bestsellers
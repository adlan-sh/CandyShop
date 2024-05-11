import React from 'react'
import "./gifts.scss";
import raspberry from "../../images/raspberry.png";
import marshmallow from "../../images/marshmallow.png";

const Gifts = () => {
    return (
        <section className="gifts-section">
            <h2 className="gifts-section-title">Заказывайте мороженое<br /> и получайте подарки!</h2>
            <ul className="gifts-list">
                <li className="gift-item">
                    <h3 className="gift-title">Малинка даром!</h3>
                    <p className="gift-description">
                        При покупке 2 кг любого фруктового<br />
                        мороженого добавим в ваш заказ банку<br />
                        маринового варенья бесплатно.
                    </p>
                    <button className="main-button gift-button" type="button">Хочу подарок</button>

                    <img className="gift-img-raspberry" src={raspberry} width="181" height="284" alt="малиновое мороженое" />
                </li>
                <li className="gift-item">
                    <h3 className="gift-title">Маршмеллоу даром!</h3>
                    <p className="gift-description">
                        При покупке 2 кг пломбира добавим<br />
                        в ваш заказ упаковку нежных<br />
                        зефирок совершенно бесплатно.
                    </p>
                    <button className="main-button gift-button" type="button">Хочу подарок</button>
                    <img className="gift-img-marshmallow" src={marshmallow} width="232" height="359" alt="маршмеллоу" />
                </li>
            </ul>
        </section>
    )
}

export default Gifts;
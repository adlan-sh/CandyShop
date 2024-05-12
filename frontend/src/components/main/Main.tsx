import React from 'react'
import Bestsellers from '../bestsellers/Bestsellers'
import Order from '../lk/order/Order'

const Main = () => {
    return (
        <main className="main-container">
            <h1 className="visually-hidden">Продажа мороженого с доставкой</h1>
            <Bestsellers />
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
                        <img className="gift-img-raspberry" src="images/raspberry.png" width="181" height="284" alt="малиновое мороженое" />
                    </li>
                    <li className="gift-item">
                        <h3 className="gift-title">Маршмеллоу даром!</h3>
                        <p className="gift-description">
                            При покупке 2 кг пломбира добавим<br />
                            в ваш заказ упаковку нежных<br />
                            зефирок совершенно бесплатно.
                        </p>
                        <button className="main-button gift-button" type="button">Хочу подарок</button>
                        <img className="gift-img-marshmallow" src="images/marshmallow.png" width="232" height="359" alt="маршмеллоу" />
                    </li>
                </ul>
            </section>
            <section className="popular-tastes">
                <h2 className="popular-tastes-main-title">Попробуйте самые популярные<br /> вкусы нашего мороженого</h2>
                <ul className="popular-tastes-list">
                    <li className="popular-tastes-item">
                        <img src="images/circle-raspberry-ice-cream.jpg" width="168" height="168" alt="Малиновый шарик мороженого" />
                        <h3 className="popular-tastes-title"> Малинка</h3>
                        <p className="popular-tastes-description">
                            Сливочное мороженое
                            с&nbsp;малиновым джемом
                        </p>
                        <span className="popular-tastes-price">310 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                    <li className="popular-tastes-item">
                        <img src="images/circle-pistachio-ice-cream.jpg" width="168" height="168" alt="Фисташковый шарик мороженого" />
                        <h3 className="popular-tastes-title">Фисташка</h3>
                        <p className="popular-tastes-description">
                            Фисташковый пломбир
                            с&nbsp;кусочками шоколада
                        </p>
                        <span className="popular-tastes-price">340 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                    <li className="popular-tastes-item">
                        <img src="images/circle-blueberry-ice-cream.jpg" width="168" height="168" alt="Черничный шарик мороженого" />
                        <h3 className="popular-tastes-title">Черника</h3>
                        <p className="popular-tastes-description">
                            Крем-брюле<br />
                            с&nbsp;черничным джемом
                        </p>
                        <span className="popular-tastes-price">330 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                    <li className="popular-tastes-item">
                        <img src="images/circle-bubble-gum-ice-cream.jpg" width="168" height="168" alt="Бабл-гам шарик мороженого" />
                        <h3 className="popular-tastes-title">Бабл-гам</h3>
                        <p className="popular-tastes-description">
                            Ванильный пломбир<br />
                            со сладкой посыпкой
                        </p>
                        <span className="popular-tastes-price">320 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                </ul>
            </section>
            <section className="advantages">
                <div className="advantages-inner">
                    <h2 className="advantages-title">
                        Магазин Глейси – это онлайн и офлайн-магазин по продаже<br />
                        мороженого собственного проиводства на развес
                    </h2>
                    <ul className="advantages-list">
                        <li className="advantages-item">
                            <svg className="advantages-icon" aria-hidden="true" focusable="false" width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 0 0-8 7v16h16V7a8 8 0 0 0-8-7Zm6.1 21H2v-8.6a1.7 1.7 0 0 0 1.4.6c1.2 0 2-.7 2-1.5v-.9a.8.8 0 1 1 1.6 0v3.1a1.8 1.8 0 0 0 2 1.8 1.8 1.8 0 0 0 2-1.7v-2a1.3 1.3 0 1 1 2.6 0 1 1 0 0 0 .6.8v8.5ZM6.6 30.6a1.4 1.4 0 1 0 2.8 0v-6.7H6.6v6.7Z"
                                fill="#2D3440" /></svg>
                            <p className="advantages-description">
                                Всё наше мороженое изготавливается на собственном<br />
                                производстве с использованием современного<br />
                                оборудования и проверенных временем технологий.
                            </p>
                        </li>
                        <li className="advantages-item">
                            <svg className="advantages-icon" aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.7 10.3a12.1 12.1 0 0 0 .5-9.6 1 1 0 0 0-.3-.4 1 1 0 0 0-1.6.3c-1.3 2.2-4.2 6-6.2 6H19l-3-.2c-1 0-1.9.1-2.9.3C11 6.5 8 2.8 6.8.6a1 1 0 0 0-.4-.5 1 1 0 0 0-1.2.1 1 1 0 0 0-.4.5 12 12 0 0 0 .5 9.6c-1.9.2-4.2.8-5 2.2a2.1 2.1 0 0 0 0 2.2c.2.4.6.7 1 1l1.4.3c.9 0 1.7-.2 2.6-.5V17a34.4 34.4 0 0 0 2.4 6.6L7 26.2a4.3 4.3 0 0 0 1.2 3.3c1.5 1.7 4.2 2.5 8 2.5 3.7 0 6.4-.8 7.9-2.5a4.4 4.4 0 0 0 1.1-3.3c-.2-.9-.4-1.7-.8-2.5l.6-1.4c.7-1.7 1.3-3.4 1.8-5.2l.1-1.6c.8.3 1.6.4 2.5.5.4 0 1-.1 1.4-.3.4-.3.8-.6 1-1a2.1 2.1 0 0 0 0-2.2c-.8-1.4-3.1-2-5-2.2Zm-1-6.7c.4 2.1 0 4.3-1 6.2A7.5 7.5 0 0 0 22 7.7c1.5-1.2 2.8-2.6 3.9-4.1Zm-19.4 0a17 17 0 0 0 3.8 4c-.7.3-1.4.8-2 1.3l-.8.9c-1-2-1.4-4-1-6.2ZM2.2 13.7c-.1-.1 0-.2 0-.2.2-.4 1.4-1 3.7-1.3l-.3 1c-1.3.6-3.1 1-3.4.5Zm22.4 3a33.3 33.3 0 0 1-2.4 6.8v.6c.4.7.7 1.5.9 2.3a2.3 2.3 0 0 1-.7 1.8c-.7.8-2.5 1.8-6.4 1.8-3.9 0-5.6-1-6.3-1.8-.5-.5-.7-1.1-.7-1.8l.8-2.3.1-.3v-.3a16 16 0 0 0-.7-2c-.7-1.5-1.3-3.1-1.8-4.8a7 7 0 0 1 2.3-6.4c1.5-1.5 5-1.9 6.3-1.9 1.3 0 4.7.4 6.4 2a7.1 7.1 0 0 1 2.2 6.3Zm5.2-3c-.2.5-2 .1-3.3-.6l-.3-.9c2.2.3 3.4.9 3.7 1.3v.2Z"
                                fill="#2D3440" /></svg>
                            <p className="advantages-description">
                                Закупка ингредиентов производится только<br />
                                у проверенных фермерских хозяйств, с которыми<br />
                                нас связывает долговременное сотрудничество.
                            </p>
                        </li>
                        <li className="advantages-item">
                            <svg className="advantages-icon" aria-hidden="true" focusable="false" width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3 18.5C19 9.5 11 .6 10.7.2h-.2l-.1-.2h-.7l-.2.1-.1.1C9 .6 1 9.4.7 18.5v1.2a13 13 0 0 0 9 12.3h.5c.1 0 8.8-2.5 9.1-12.3v-1.2ZM3.1 15c1.8 1.7 3.8 3 6 4v4.3c-2.2-1.2-5.6-3.2-6.6-5 0-1.1.2-2.2.5-3.3Zm1.8-4.8C6 11.6 7.5 12.6 9 13.2v3.7c-2-.9-3.9-2.2-5.4-3.8.3-1 .7-2 1.2-2.8ZM16.4 13c-1.6 1.7-3.5 3-5.5 3.8v-3.7c1.6-.6 3-1.6 4.2-3l1.3 2.9Zm-5.5-2V3.6c1.2 1.6 2.3 3.2 3.3 5-.8 1.1-2 2-3.3 2.6Zm0 12.3v-4.3c2.2-1 4.3-2.3 6.1-4 .3 1.1.5 2.2.5 3.3-1 1.8-4.4 3.8-6.6 5ZM9.1 11.2a8.2 8.2 0 0 1-3.3-2.7c1-1.8 2-3.5 3.3-5v7.7ZM2.7 21.4c2 1.7 4.1 3 6.4 4.1v4.2c-1.6-.7-3-1.8-4.2-3.3a11.5 11.5 0 0 1-2.2-5Zm8.2 8.3v-4.2c2.3-1 4.5-2.4 6.4-4-.3 1.8-1 3.5-2.2 5a10.5 10.5 0 0 1-4.2 3.2Z"
                                fill="#2D3440" /></svg>
                            <p className="advantages-description">
                                Для приготовления мороженого используются сливки<br />
                                и молоко высочайшего качества. Все ингредиенты<br />
                                и добавки произведены из натурального сырья.
                            </p>
                        </li>
                        <li className="advantages-item">
                            <svg className="advantages-icon" aria-hidden="true" focusable="false" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.19 5.07a5.3 5.3 0 0 0-1.37-3.59A4.49 4.49 0 0 0 6.52 0C5.28 0 4.1.53 3.22 1.48a5.3 5.3 0 0 0-1.36 3.59v14.75A7.69 7.69 0 0 0 .79 28.2a7 7 0 0 0 2.17 2.6 6.14 6.14 0 0 0 6.25.62c1-.46 1.89-1.19 2.57-2.12a7.78 7.78 0 0 0 1.13-6.7 7.3 7.3 0 0 0-1.72-2.98V5.07Zm.17 19.72c0 .88-.2 1.75-.58 2.52a5.02 5.02 0 0 1-1.63 1.9 4.5 4.5 0 0 1-4.62.28 4.88 4.88 0 0 1-1.82-1.68 5.44 5.44 0 0 1-.47-5c.32-.8.83-1.51 1.47-2.05V5.06c0-.8.3-1.58.82-2.15a2.7 2.7 0 0 1 2-.9c.74 0 1.45.33 1.98.9.53.57.82 1.35.82 2.16v15.5c.63.47 1.14 1.1 1.5 1.84.35.74.53 1.55.53 2.38Z" fill="#2D3440" /><path d="M7.53 21.64V5.14c0-.27-.1-.52-.27-.71a.9.9 0 0 0-.65-.3.9.9 0 0 0-.66.3c-.17.19-.27.44-.27.71v16.5c-.62.24-1.14.7-1.47 1.32a3.25 3.25 0 0 0 .6 3.84c.5.46 1.14.71 1.8.71.65 0 1.29-.25 1.79-.7a3.25 3.25 0 0 0 .6-3.84 2.85 2.85 0 0 0-1.47-1.33ZM18.67 3.94H13.1v2.02h5.57V3.94ZM18.67 7.97H13.1V10h5.57V7.97ZM18.67 12H13.1v2.02h5.57V12ZM18.67 16.03H13.1v2.02h5.57v-2.02Z"
                                fill="#2D3440" /></svg>
                            <p className="advantages-description">
                                Доставка нашего мороженого осуществляется в
                                специальном термопаке, который не даёт мороженому
                                растаять и позволяет сохранить превосходный вкус.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="potom">
                <article className="post-preview">
                    <p className="post-preview-subtitle">Новое в нашем блоге</p>
                    <h2 className="post-preview-title">
                        10 способов сервировки
                        фруктовых щербетов<br />
                        к столу
                    </h2>
                </article>
                <section className="email-subscribe">
                    <div className="email-subscribe-inner">
                        <p className="email-subscribe-description">
                            Подпишитесь на нашу сладкую рассылку и будьте всегда<br />
                            в курсе всего самого вкусного, что у нас происходит. Обещаем<br />
                            не спамить и не слать всякой ненужной ерунды. Честно =)
                        </p>
                        <form className="email-subscribe-form" action="https://echo.htmlacademy.ru" method="post">
                            <input type="email" name="email" required placeholder="email@example.com" />
                            <button className="additional-button email-subscribe-button">Отправить</button>
                        </form>
                    </div>
                </section>
            </div>
            <section className="delivery-container">
                <h2 className="delivery-title">
                    Доставка любимого<br />
                    мороженого на дом
                </h2>
                <p className="delivery-description">
                    Хочется полакомиться любимым дессертом,<br />
                    но нет времени съездить в магазин? Закажите<br />
                    доставку мороженого на дом, и курьер<br />
                    привезёт вам ваш заказ в течение часа!
                </p>
                <div className="delivery-form-container">
                    <p className="delivery-form-description">
                        Укажите адрес и дату доставки, и мы свяжемся<br />
                        с вами, чтобы подтвердить заказ.
                    </p>
                    <form className="delivery-form" action="https://echo.htmlacademy.ru" method="post">
                        <p className="field-group">
                            <span className="delivery-form-label">
                                <label className="delivery-form-label" htmlFor="field-group-data">Дата</label>
                                <span className="tooltip">
                                    <button className="tooltip-button" type="button" aria-labelledby="tooltip-label">
                                        <svg className="tooltip-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.125a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75ZM.792 7a6.209 6.209 0 1 1 12.417 0A6.209 6.209 0 0 1 .792 7ZM7 6.333c.368 0 .667.299.667.667v2.217a.667.667 0 0 1-1.334 0V7c0-.368.299-.667.667-.667Zm0-2.216A.667.667 0 0 0 7 5.45h.006a.667.667 0 0 0 0-1.333H7Z"
                                            fill="currentColor" /></svg>
                                    </button>
                                    <span className="tooltip-text" role="tooltip" id="tooltip-label">
                                        если припозднимся на 30 минут, то вы получите все товары бесплатно
                                    </span>
                                </span>
                            </span>
                            <input type="text" placeholder="01.04.2020" name="date" id="field-group-data" />
                        </p>
                        <p className="field-group">
                            <label className="delivery-form-label" htmlFor="field-group-phone">Телефон</label>
                            <input type="text" placeholder="+7 800 999-00-00" name="telephone" id="field-group-phone" />
                        </p>
                        <p className="field-group">
                            <span className="delivery-form-label">
                                <label className="delivery-form-label" htmlFor="field-group-adress">Адрес</label>
                                <span className="tooltip">
                                    <button className="tooltip-button" type="button" aria-labelledby="tooltip-label">
                                        <svg className="tooltip-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.125a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75ZM.792 7a6.209 6.209 0 1 1 12.417 0A6.209 6.209 0 0 1 .792 7ZM7 6.333c.368 0 .667.299.667.667v2.217a.667.667 0 0 1-1.334 0V7c0-.368.299-.667.667-.667Zm0-2.216A.667.667 0 0 0 7 5.45h.006a.667.667 0 0 0 0-1.333H7Z"
                                            fill="currentColor" /></svg>
                                    </button>
                                    <span className="tooltip-text" role="tooltip" id="tooltip-label">
                                        за 15 минут до приезда мы уточним, как лучше доставить мороженое
                                    </span>
                                </span>
                            </span>
                            <input type="text" placeholder="ул. Большая Конюшенная, 19/8" name="adress" id="field-group-adress" />
                        </p>
                        <button className="additional-button delivery-button" type="submit">Отправить</button>
                    </form>
                </div>
            </section>
            <section className="feedback">
                <h2 className="visually-hidden">Обратная связь</h2>
                <div className="feedback-container">
                    <p className="feedback-title">
                        Адрес главного офиса<br />
                        и офлайн-магазина:
                    </p>
                    <p className="feedback-adress">
                        наб. реки Карповки,<br />
                        5 лит П, Санкт-Петербург
                    </p>
                    <p className="feedback-title">Для заказов по телефону:</p>
                    <a className="feedback-phone" href="tel:+78128121212">+7 (812) 812-12-12</a>
                    <p className="schedule">(с 10 до 20 ежедневно)</p>
                    <button className="additional-button feedback-button" type="button">Форма обратной связи</button>
                </div>
            </section>
        </main>
    )
}

export default Main
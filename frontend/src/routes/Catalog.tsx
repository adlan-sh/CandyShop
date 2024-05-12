import React from 'react'

const Catalog = () => {
    return (
        <main className="main-container">
            <h1 className="visually-hidden">Каталог</h1>
            <ul className="breadcrumbs">
                <li className="breadcrumbs-item">
                    <a className="breadcrumbs-link" href="index.html">
                        Главная
                    </a>
                </li>
                <li className="breadcrumbs-item">
                    <a className="breadcrumbs-link" href="catalog.html">
                        Каталог
                    </a>
                </li>
                <li className="breadcrumbs-item breadcrumbs-item-current">
                    <a className="breadcrumbs-link" href="#">
                        Сливочное
                    </a>
                </li>
            </ul>
            <h2 className="catalog-title">Сливочное мороженое</h2>
            <form className="catalog-filters" action="https://echo.htmlacademy.ru" method="get">
                <fieldset className="catalog-filter-group">
                    <legend className="catalog-filter-title">Сортировка:</legend>
                    <select className="select-control" name="sorted-by">
                        <option value="popular" selected>по популярности</option>
                        <option value="price">по цене</option>
                        <option value="ccal">по калориям</option>
                    </select>
                </fieldset>
                <fieldset className="catalog-filter-group">
                    <legend className="catalog-filter-title">Цена: 100 Р - 500 Р</legend>
                    <div className="catalog-filter-slider">
                        <div className="slider-area">
                            <div className="slider-selected-area" style={{ left: "24px", width: "700px" }}>
                                <button className="slider-button" type="button">
                                    <span className="visually-hidden">Уменьшить цену</span>
                                </button>
                                <button className="slider-button button-max" type="button">
                                    <span className="visually-hidden">Увеличить цену</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="catalog-filter-group">
                    <legend className="catalog-filter-title">Жирность:</legend>
                    <div className="label-container">
                        <label>
                            <input className="visually-hidden" type="radio" name="fat-content" value="0%" />
                            <span className="radio-desc">0%</span>
                            <div className="radio"></div>
                        </label>
                        <label>
                            <input className="visually-hidden" type="radio" name="fat-content" value="less 10%" checked />
                            <span className="radio-desc">до 10%</span>
                            <div className="radio"></div>
                        </label>
                        <label>
                            <input className="visually-hidden" type="radio" name="fat-content" value="less 30%" />
                            <span className="radio-desc">до 30%</span>
                            <div className="radio"></div>
                        </label>
                        <label>
                            <input className="visually-hidden" type="radio" name="fat-content" value="more 30%" />
                            <span className="radio-desc">выше 30%</span>
                            <div className="radio"></div>
                        </label>
                    </div>
                </fieldset>
                <fieldset className="catalog-filter-group">
                    <legend className="catalog-filter-title">Наполнители:</legend>
                    <div className="label-container checkbox-label-container">
                        <label>
                            <input className="visually-hidden" type="checkbox" name="fillers" value="chocolate" checked />
                            <span className="checkbox-desc">шоколадные</span>
                            <svg className="checkbox-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.3 1.33a.96.96 0 0 0-.97.97v11.4a.96.96 0 0 0 .97.96h11.4a.96.96 0 0 0 .97-1V2.3a.91.91 0 0 0-.29-.68 1 1 0 0 0-.28-.23.97.97 0 0 0-.4-.06H2.3Zm13.54 13.21A2.3 2.3 0 0 1 13.7 16H2.3A2.3 2.3 0 0 1 0 13.7V2.3A2.3 2.3 0 0 1 1.46.16c.11-.1.27-.16.43-.16H13.7c.34 0 .65.04.94.17.28.12.5.31.69.5.48.48.67 1.06.67 1.63v11.8c0 .18-.06.33-.16.44Z" fill="currentColor" /></svg>
                            <svg className="checkbox-checked-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.615 1.615a.962.962 0 0 1 .68-.282h8.96a.667.667 0 1 0 0-1.333h-8.96A2.295 2.295 0 0 0 0 2.296v11.407A2.297 2.297 0 0 0 2.296 16h11.402a2.295 2.295 0 0 0 2.295-2.296V8a.667.667 0 0 0-1.333 0v5.703a.963.963 0 0 1-.962.963H2.296a.962.962 0 0 1-.963-.963V2.296c0-.255.102-.5.282-.68Zm14.202.325a.667.667 0 1 0-.968-.917L7.614 8.66 5.782 6.727a.667.667 0 0 0-.967.917l2.315 2.444a.667.667 0 0 0 .968 0l7.719-8.148Z" fill="currentColor" /></svg>
                        </label>
                        <label>
                            <input className="visually-hidden" type="checkbox" name="fillers" value="sugar-sprinkle" checked />
                            <span className="checkbox-desc">сахарные посыпки</span>
                            <svg className="checkbox-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.3 1.33a.96.96 0 0 0-.97.97v11.4a.96.96 0 0 0 .97.96h11.4a.96.96 0 0 0 .97-1V2.3a.91.91 0 0 0-.29-.68 1 1 0 0 0-.28-.23.97.97 0 0 0-.4-.06H2.3Zm13.54 13.21A2.3 2.3 0 0 1 13.7 16H2.3A2.3 2.3 0 0 1 0 13.7V2.3A2.3 2.3 0 0 1 1.46.16c.11-.1.27-.16.43-.16H13.7c.34 0 .65.04.94.17.28.12.5.31.69.5.48.48.67 1.06.67 1.63v11.8c0 .18-.06.33-.16.44Z" fill="currentColor" /></svg>
                            <svg className="checkbox-checked-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.615 1.615a.962.962 0 0 1 .68-.282h8.96a.667.667 0 1 0 0-1.333h-8.96A2.295 2.295 0 0 0 0 2.296v11.407A2.297 2.297 0 0 0 2.296 16h11.402a2.295 2.295 0 0 0 2.295-2.296V8a.667.667 0 0 0-1.333 0v5.703a.963.963 0 0 1-.962.963H2.296a.962.962 0 0 1-.963-.963V2.296c0-.255.102-.5.282-.68Zm14.202.325a.667.667 0 1 0-.968-.917L7.614 8.66 5.782 6.727a.667.667 0 0 0-.967.917l2.315 2.444a.667.667 0 0 0 .968 0l7.719-8.148Z" fill="currentColor" /></svg>
                        </label>
                        <label>
                            <input className="visually-hidden" type="checkbox" name="fillers" value="fruits" />
                            <span className="checkbox-desc">фрукты</span>
                            <svg className="checkbox-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.3 1.33a.96.96 0 0 0-.97.97v11.4a.96.96 0 0 0 .97.96h11.4a.96.96 0 0 0 .97-1V2.3a.91.91 0 0 0-.29-.68 1 1 0 0 0-.28-.23.97.97 0 0 0-.4-.06H2.3Zm13.54 13.21A2.3 2.3 0 0 1 13.7 16H2.3A2.3 2.3 0 0 1 0 13.7V2.3A2.3 2.3 0 0 1 1.46.16c.11-.1.27-.16.43-.16H13.7c.34 0 .65.04.94.17.28.12.5.31.69.5.48.48.67 1.06.67 1.63v11.8c0 .18-.06.33-.16.44Z" fill="currentColor" /></svg>
                            <svg className="checkbox-checked-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.615 1.615a.962.962 0 0 1 .68-.282h8.96a.667.667 0 1 0 0-1.333h-8.96A2.295 2.295 0 0 0 0 2.296v11.407A2.297 2.297 0 0 0 2.296 16h11.402a2.295 2.295 0 0 0 2.295-2.296V8a.667.667 0 0 0-1.333 0v5.703a.963.963 0 0 1-.962.963H2.296a.962.962 0 0 1-.963-.963V2.296c0-.255.102-.5.282-.68Zm14.202.325a.667.667 0 1 0-.968-.917L7.614 8.66 5.782 6.727a.667.667 0 0 0-.967.917l2.315 2.444a.667.667 0 0 0 .968 0l7.719-8.148Z" fill="currentColor" /></svg>
                        </label>
                        <label>
                            <input className="visually-hidden" type="checkbox" name="fillers" value="syrups" />
                            <span className="checkbox-desc">сиропы</span>
                            <svg className="checkbox-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.3 1.33a.96.96 0 0 0-.97.97v11.4a.96.96 0 0 0 .97.96h11.4a.96.96 0 0 0 .97-1V2.3a.91.91 0 0 0-.29-.68 1 1 0 0 0-.28-.23.97.97 0 0 0-.4-.06H2.3Zm13.54 13.21A2.3 2.3 0 0 1 13.7 16H2.3A2.3 2.3 0 0 1 0 13.7V2.3A2.3 2.3 0 0 1 1.46.16c.11-.1.27-.16.43-.16H13.7c.34 0 .65.04.94.17.28.12.5.31.69.5.48.48.67 1.06.67 1.63v11.8c0 .18-.06.33-.16.44Z" fill="currentColor" /></svg>
                            <svg className="checkbox-checked-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.615 1.615a.962.962 0 0 1 .68-.282h8.96a.667.667 0 1 0 0-1.333h-8.96A2.295 2.295 0 0 0 0 2.296v11.407A2.297 2.297 0 0 0 2.296 16h11.402a2.295 2.295 0 0 0 2.295-2.296V8a.667.667 0 0 0-1.333 0v5.703a.963.963 0 0 1-.962.963H2.296a.962.962 0 0 1-.963-.963V2.296c0-.255.102-.5.282-.68Zm14.202.325a.667.667 0 1 0-.968-.917L7.614 8.66 5.782 6.727a.667.667 0 0 0-.967.917l2.315 2.444a.667.667 0 0 0 .968 0l7.719-8.148Z" fill="currentColor" /></svg>
                        </label>
                        <label>
                            <input className="visually-hidden" type="checkbox" name="fillers" value="jams" />
                            <span className="checkbox-desc">джемы</span>
                            <svg className="checkbox-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.3 1.33a.96.96 0 0 0-.97.97v11.4a.96.96 0 0 0 .97.96h11.4a.96.96 0 0 0 .97-1V2.3a.91.91 0 0 0-.29-.68 1 1 0 0 0-.28-.23.97.97 0 0 0-.4-.06H2.3Zm13.54 13.21A2.3 2.3 0 0 1 13.7 16H2.3A2.3 2.3 0 0 1 0 13.7V2.3A2.3 2.3 0 0 1 1.46.16c.11-.1.27-.16.43-.16H13.7c.34 0 .65.04.94.17.28.12.5.31.69.5.48.48.67 1.06.67 1.63v11.8c0 .18-.06.33-.16.44Z" fill="currentColor" /></svg>
                            <svg className="checkbox-checked-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.615 1.615a.962.962 0 0 1 .68-.282h8.96a.667.667 0 1 0 0-1.333h-8.96A2.295 2.295 0 0 0 0 2.296v11.407A2.297 2.297 0 0 0 2.296 16h11.402a2.295 2.295 0 0 0 2.295-2.296V8a.667.667 0 0 0-1.333 0v5.703a.963.963 0 0 1-.962.963H2.296a.962.962 0 0 1-.963-.963V2.296c0-.255.102-.5.282-.68Zm14.202.325a.667.667 0 1 0-.968-.917L7.614 8.66 5.782 6.727a.667.667 0 0 0-.967.917l2.315 2.444a.667.667 0 0 0 .968 0l7.719-8.148Z" fill="currentColor" /></svg>
                        </label>
                    </div>
                </fieldset>
                <button className="transparent-button catalog-filter-button" type="submit">Применить</button>
            </form>
            <section className="popular-tastes">
                <h2 className="visually-hidden">Вкусы по фильтрам:</h2>
                <ul className="popular-tastes-list">
                    <li className="popular-tastes-item">
                        <img src="images/circle-raspberry-ice-cream.jpg" width="168" height="168" alt="Малиновый шарик мороженого" />
                        <h3 className="popular-tastes-title"> Малинка</h3>
                        <p className="popular-tastes-description">
                            Сливочное мороженое
                            с малиновым джемом
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
                            с кусочками шоколада
                        </p>
                        <span className="popular-tastes-price">340 Р/кг</span>
                        <button className=" button popular-tastes-button" type="button">
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
                            с черничным джемом
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
                    <li className="popular-tastes-item">
                        <img src="images/circle-blackberry-ice-cream.jpg" width="168" height="168" alt="Ежевичный шарик мороженого" />
                        <h3 className="popular-tastes-title">Ежевика</h3>
                        <p className="popular-tastes-description">
                            Сливочное мороженое
                            с ежевичным джемом
                        </p>
                        <span className="popular-tastes-price">330 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                    <li className="popular-tastes-item">
                        <img src="images/circle-banana-ice-cream.jpg" width="168" height="168" alt="Банановый шарик мороженого" />
                        <h3 className="popular-tastes-title">Банан</h3>
                        <p className="popular-tastes-description">
                            Сливочный пломбир<br />
                            с банановым вкусом
                        </p>
                        <span className="popular-tastes-price">340 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                    <li className="popular-tastes-item">
                        <img src="images/circle-chocolate-ice-cream.jpg" width="168" height="168" alt="Шоколадный шарик мороженого" />
                        <h3 className="popular-tastes-title">Шоколадка</h3>
                        <p className="popular-tastes-description">
                            Классический
                            шоколадный пломбир
                        </p>
                        <span className="popular-tastes-price">270 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                    <li className="popular-tastes-item">
                        <img src="images/circle-strawberry-ice-cream.jpg" width="168" height="168" alt="Клубничный шарик мороженого" />
                        <h3 className="popular-tastes-title">Клубничка</h3>
                        <p className="popular-tastes-description">
                            Сливочный пломбир<br />
                            с клубничным вкусом
                        </p>
                        <span className="popular-tastes-price">300 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                    <li className="popular-tastes-item">
                        <img src="images/circle-lemon-ice-cream.jpg" width="168" height="168" alt="Лимонный шарик мороженого" />
                        <h3 className="popular-tastes-title">Лимон</h3>
                        <p className="popular-tastes-description">
                            Освежающий<br />
                            лимонный сорбет
                        </p>
                        <span className="popular-tastes-price">310 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                    <li className="popular-tastes-item">
                        <img src="images/circle-menthol-ice-cream.jpg" width="168" height="168" alt="Шарик мороженого с ментолом" />
                        <h3 className="popular-tastes-title">Ментол</h3>
                        <p className="popular-tastes-description">
                            Сливочный пломбир<br />
                            с ментоловым сиропом
                        </p>
                        <span className="popular-tastes-price">320 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                    <li className="popular-tastes-item">
                        <img src="images/circle-nut-ice-cream.jpg" width="168" height="168" alt="Ореховый шарик мороженого" />
                        <h3 className="popular-tastes-title">Орешек</h3>
                        <p className="popular-tastes-description">
                            Фисташковый пломбир<br />
                            с шоколадным сиропом
                        </p>
                        <span className="popular-tastes-price">360 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                    <li className="popular-tastes-item">
                        <img src="images/circle-creme-brulee-ice-cream.jpg" width="168" height="168" alt="Крем-брюле шарик мороженого" />
                        <h3 className="popular-tastes-title">Крем-брюле</h3>
                        <p className="popular-tastes-description">
                            Классическое<br />
                            крем-брюле
                        </p>
                        <span className="popular-tastes-price">280 Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>
                </ul>
            </section>
            <section className="pagination">
                <button className="main-button pagination-button" type="button">Показать ещё</button>
                <ul className="pagination-list">
                    <li className="pagination-item">
                        <a className="pagination-link pagination-arrow" href="#">
                            <svg className="pagination-icon pagination-icon-disabled" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.8 3.8a.66.66 0 1 0-.94-.94L4.2 7.53a.67.67 0 0 0 0 .94l4.67 4.67a.66.66 0 1 0 .94-.94L5.6 8l4.2-4.2Z"
                                fill="currentColor" /></svg>
                        </a>
                    </li>
                    <li className="pagination-item pagination-item-current">
                        <a className="pagination-link" href="#">1</a>
                    </li>
                    <li className="pagination-item">
                        <a className="pagination-link" href="#">2</a>
                    </li>
                    <li className="pagination-item">
                        <a className="pagination-link" href="#">3</a>
                    </li>
                    <li className="pagination-item">
                        <a className="pagination-link" href="#">4</a>
                    </li>
                    <li>
                        <a className="pagination-link" href="#">5</a>
                    </li>
                    <li className="pagination-item">
                        <a className="pagination-link pagination-arrow" href="#">
                            <svg className="pagination-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.8 3.8a.66.66 0 1 0-.94-.94L4.2 7.53a.67.67 0 0 0 0 .94l4.67 4.67a.66.66 0 1 0 .94-.94L5.6 8l4.2-4.2Z"
                                fill="currentColor" /></svg>
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Catalog
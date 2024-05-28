import React from 'react'
import "./catalogFilters.scss";

const CatalogFilters = () => {
    return (
        <form className="catalog-filters" action="https://echo.htmlacademy.ru" method="get">
            {/* <fieldset className="catalog-filter-group">
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
                        <div className="slider-selected-area" style={{ left: "24px" }}>
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
                        <svg className="checkbox-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.3 1.33a.96.96 0 0 0-.97.97v11.4a.96.96 0 0 0 .97.96h11.4a.96.96 0 0 0 .97-1V2.3a.91.91 0 0 0-.29-.68 1 1 0 0 0-.28-.23.97.97 0 0 0-.4-.06H2.3Zm13.54 13.21A2.3 2.3 0 0 1 13.7 16H2.3A2.3 2.3 0 0 1 0 13.7V2.3A2.3 2.3 0 0 1 1.46.16c.11-.1.27-.16.43-.16H13.7c.34 0 .65.04.94.17.28.12.5.31.69.5.48.48.67 1.06.67 1.63v11.8c0 .18-.06.33-.16.44Z" fill="currentColor" /></svg>
                        <svg className="checkbox-checked-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.615 1.615a.962.962 0 0 1 .68-.282h8.96a.667.667 0 1 0 0-1.333h-8.96A2.295 2.295 0 0 0 0 2.296v11.407A2.297 2.297 0 0 0 2.296 16h11.402a2.295 2.295 0 0 0 2.295-2.296V8a.667.667 0 0 0-1.333 0v5.703a.963.963 0 0 1-.962.963H2.296a.962.962 0 0 1-.963-.963V2.296c0-.255.102-.5.282-.68Zm14.202.325a.667.667 0 1 0-.968-.917L7.614 8.66 5.782 6.727a.667.667 0 0 0-.967.917l2.315 2.444a.667.667 0 0 0 .968 0l7.719-8.148Z" fill="currentColor" /></svg>
                    </label>
                    <label>
                        <input className="visually-hidden" type="checkbox" name="fillers" value="sugar-sprinkle" checked />
                        <span className="checkbox-desc">сахарные посыпки</span>
                        <svg className="checkbox-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.3 1.33a.96.96 0 0 0-.97.97v11.4a.96.96 0 0 0 .97.96h11.4a.96.96 0 0 0 .97-1V2.3a.91.91 0 0 0-.29-.68 1 1 0 0 0-.28-.23.97.97 0 0 0-.4-.06H2.3Zm13.54 13.21A2.3 2.3 0 0 1 13.7 16H2.3A2.3 2.3 0 0 1 0 13.7V2.3A2.3 2.3 0 0 1 1.46.16c.11-.1.27-.16.43-.16H13.7c.34 0 .65.04.94.17.28.12.5.31.69.5.48.48.67 1.06.67 1.63v11.8c0 .18-.06.33-.16.44Z" fill="currentColor" /></svg>
                        <svg className="checkbox-checked-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.615 1.615a.962.962 0 0 1 .68-.282h8.96a.667.667 0 1 0 0-1.333h-8.96A2.295 2.295 0 0 0 0 2.296v11.407A2.297 2.297 0 0 0 2.296 16h11.402a2.295 2.295 0 0 0 2.295-2.296V8a.667.667 0 0 0-1.333 0v5.703a.963.963 0 0 1-.962.963H2.296a.962.962 0 0 1-.963-.963V2.296c0-.255.102-.5.282-.68Zm14.202.325a.667.667 0 1 0-.968-.917L7.614 8.66 5.782 6.727a.667.667 0 0 0-.967.917l2.315 2.444a.667.667 0 0 0 .968 0l7.719-8.148Z" fill="currentColor" /></svg>
                    </label>
                    <label>
                        <input className="visually-hidden" type="checkbox" name="fillers" value="fruits" />
                        <span className="checkbox-desc">фрукты</span>
                        <svg className="checkbox-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.3 1.33a.96.96 0 0 0-.97.97v11.4a.96.96 0 0 0 .97.96h11.4a.96.96 0 0 0 .97-1V2.3a.91.91 0 0 0-.29-.68 1 1 0 0 0-.28-.23.97.97 0 0 0-.4-.06H2.3Zm13.54 13.21A2.3 2.3 0 0 1 13.7 16H2.3A2.3 2.3 0 0 1 0 13.7V2.3A2.3 2.3 0 0 1 1.46.16c.11-.1.27-.16.43-.16H13.7c.34 0 .65.04.94.17.28.12.5.31.69.5.48.48.67 1.06.67 1.63v11.8c0 .18-.06.33-.16.44Z" fill="currentColor" /></svg>
                        <svg className="checkbox-checked-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.615 1.615a.962.962 0 0 1 .68-.282h8.96a.667.667 0 1 0 0-1.333h-8.96A2.295 2.295 0 0 0 0 2.296v11.407A2.297 2.297 0 0 0 2.296 16h11.402a2.295 2.295 0 0 0 2.295-2.296V8a.667.667 0 0 0-1.333 0v5.703a.963.963 0 0 1-.962.963H2.296a.962.962 0 0 1-.963-.963V2.296c0-.255.102-.5.282-.68Zm14.202.325a.667.667 0 1 0-.968-.917L7.614 8.66 5.782 6.727a.667.667 0 0 0-.967.917l2.315 2.444a.667.667 0 0 0 .968 0l7.719-8.148Z" fill="currentColor" /></svg>
                    </label>
                    <label>
                        <input className="visually-hidden" type="checkbox" name="fillers" value="syrups" />
                        <span className="checkbox-desc">сиропы</span>
                        <svg className="checkbox-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.3 1.33a.96.96 0 0 0-.97.97v11.4a.96.96 0 0 0 .97.96h11.4a.96.96 0 0 0 .97-1V2.3a.91.91 0 0 0-.29-.68 1 1 0 0 0-.28-.23.97.97 0 0 0-.4-.06H2.3Zm13.54 13.21A2.3 2.3 0 0 1 13.7 16H2.3A2.3 2.3 0 0 1 0 13.7V2.3A2.3 2.3 0 0 1 1.46.16c.11-.1.27-.16.43-.16H13.7c.34 0 .65.04.94.17.28.12.5.31.69.5.48.48.67 1.06.67 1.63v11.8c0 .18-.06.33-.16.44Z" fill="currentColor" /></svg>
                        <svg className="checkbox-checked-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.615 1.615a.962.962 0 0 1 .68-.282h8.96a.667.667 0 1 0 0-1.333h-8.96A2.295 2.295 0 0 0 0 2.296v11.407A2.297 2.297 0 0 0 2.296 16h11.402a2.295 2.295 0 0 0 2.295-2.296V8a.667.667 0 0 0-1.333 0v5.703a.963.963 0 0 1-.962.963H2.296a.962.962 0 0 1-.963-.963V2.296c0-.255.102-.5.282-.68Zm14.202.325a.667.667 0 1 0-.968-.917L7.614 8.66 5.782 6.727a.667.667 0 0 0-.967.917l2.315 2.444a.667.667 0 0 0 .968 0l7.719-8.148Z" fill="currentColor" /></svg>
                    </label>
                    <label>
                        <input className="visually-hidden" type="checkbox" name="fillers" value="jams" />
                        <span className="checkbox-desc">джемы</span>
                        <svg className="checkbox-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.3 1.33a.96.96 0 0 0-.97.97v11.4a.96.96 0 0 0 .97.96h11.4a.96.96 0 0 0 .97-1V2.3a.91.91 0 0 0-.29-.68 1 1 0 0 0-.28-.23.97.97 0 0 0-.4-.06H2.3Zm13.54 13.21A2.3 2.3 0 0 1 13.7 16H2.3A2.3 2.3 0 0 1 0 13.7V2.3A2.3 2.3 0 0 1 1.46.16c.11-.1.27-.16.43-.16H13.7c.34 0 .65.04.94.17.28.12.5.31.69.5.48.48.67 1.06.67 1.63v11.8c0 .18-.06.33-.16.44Z" fill="currentColor" /></svg>
                        <svg className="checkbox-checked-item" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.615 1.615a.962.962 0 0 1 .68-.282h8.96a.667.667 0 1 0 0-1.333h-8.96A2.295 2.295 0 0 0 0 2.296v11.407A2.297 2.297 0 0 0 2.296 16h11.402a2.295 2.295 0 0 0 2.295-2.296V8a.667.667 0 0 0-1.333 0v5.703a.963.963 0 0 1-.962.963H2.296a.962.962 0 0 1-.963-.963V2.296c0-.255.102-.5.282-.68Zm14.202.325a.667.667 0 1 0-.968-.917L7.614 8.66 5.782 6.727a.667.667 0 0 0-.967.917l2.315 2.444a.667.667 0 0 0 .968 0l7.719-8.148Z" fill="currentColor" /></svg>
                    </label>
                </div>
            </fieldset>
            <button className="transparent-button catalog-filter-button" type="submit">Применить</button> */}
        </form>
    )
}

export default CatalogFilters
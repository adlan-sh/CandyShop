import "./iceCreamCatalog.scss";
import CircleRaspberryIceCream from "../../images/circle-raspberry-ice-cream.jpg";
import CirclePistachioIceCream from "../../images/circle-pistachio-ice-cream.jpg";
import CircleBlueBerryIceCream from "../../images/circle-blueberry-ice-cream.jpg";
import CircleBubbleGumIceCream from "../../images/circle-bubble-gum-ice-cream.jpg";
import useGetProducts from '../../api/product/getProducts';
import { ProductType } from '../../api/product/product.type';


const IceCreamCatalog = () => {
    const { data, IsPendingGetProducts, getProductsError } = useGetProducts();
    const data1: ProductType[] = [{
        id: 1,
        icon: CircleRaspberryIceCream,
        tag: "tag",
        name: "Малинка",
        category: "icecream",
        hidden: false,
        count: 1,
        costPer100g: 31
    }]
    return (
        <section className="popular-tastes">
            <h2 className="visually-hidden">Вкусы по фильтрам:</h2>
            <ul className="popular-tastes-list">
                {data1.map(product =>
                    <li className="popular-tastes-item">
                        <img src={CircleRaspberryIceCream} width="168" height="168" alt="Малиновый шарик мороженого" />
                        <h3 className="popular-tastes-title"> {product.name}</h3>
                        <p className="popular-tastes-description">
                            Сливочное мороженое
                            с малиновым джемом
                        </p>
                        <span className="popular-tastes-price">{product.costPer100g * 10} Р/кг</span>
                        <button className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>)}
                <li className="popular-tastes-item">
                    <img src={CirclePistachioIceCream} width="168" height="168" alt="Фисташковый шарик мороженого" />
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
                    <img src={CircleBlueBerryIceCream} width="168" height="168" alt="Черничный шарик мороженого" />
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
                    <img src={CircleBubbleGumIceCream} width="168" height="168" alt="Бабл-гам шарик мороженого" />
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
                {/* <li className="popular-tastes-item">
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
                </li> */}
            </ul>
        </section>
    )
}

export default IceCreamCatalog
import "./header.scss";
import Popover from '../popover/Popover';
import { Link } from "react-router-dom";
import getCartRequest from "../../api/cart/getCartRequest";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useGetCart from "../../api/cart/getCartRequest";
import useDeleteCartItem from "../../api/cart/deleteCartItem";
import useChangeCartItemCount from "../../api/cart/changeCartItemCount";
import { CartItem, ChangeCartItemCountEnum } from "../../api/cart/cart.type";
import useLogin from "../../api/user/login";
import { Loader2 } from "lucide-react";
import { useContext, useState } from "react";
import useGetUser from "../../api/user/getUser";
import { useAppContext } from "../..";

const Button = ({ onClick }: { name: string, onClick?: () => void, }) => {
    const { data } = useGetUser();
    return (
        <button onClick={onClick} className="navigation-link navigation-link-with-img" >
            <svg className="navigation-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.2.87c0-.36.3-.66.68-.66h3a2.17 2.17 0 0 1 2.16 2.17v10.5a2.17 2.17 0 0 1-2.16 2.16h-3a.67.67 0 0 1 0-1.33h3a.83.83 0 0 0 .83-.84V2.38a.83.83 0 0 0-.83-.83h-3A.67.67 0 0 1 9.2.87ZM5.66 3.4a.67.67 0 0 1 .95 0l3.74 3.75a.66.66 0 0 1 0 .95L6.6 11.85a.67.67 0 1 1-.95-.95l2.62-2.6H.87a.67.67 0 0 1 0-1.34h7.4L5.65 4.35a.67.67 0 0 1 0-.95Z"
                fill="#2D3440" />
            </svg>
            {data?.name ? data.name : "Войти"}
        </button>
    )
}

const Button2 = ({ onClick }: { onClick: () => void }) => {
    return (
        <button onClick={onClick} className="navigation-link navigation-link-with-img">
            <svg className="navigation-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                fill="#2D3440" />
            </svg>
            Пусто
        </button>
    )
}

const getTotalPrice = (data: CartItem[]) => {
    let totalPrice = 0;
    data?.forEach(element => {
        totalPrice += element.item.costPer100g * element.countInCart;
    });
    return totalPrice;
}

const handleSubmit = async (e: any, login: any) => {
    e.preventDefault();
    const a = await login({ login: e.target[0].value, password: e.target[1].value, register: false });
}

const handleRegister = async (e: any, login: any) => {
    e.preventDefault();
    const a = await login({ login: e.target[0].value, password: e.target[1].value, register: true, email: e.target[3].value, username: e.target[2].value });
}

const Header = () => {
    const { auth, toggleAuth } = useAppContext();
    const { data, getCartError, IsPendingGetCart, RefetchCart } = useGetCart(auth);
    const { mutate: deleteCartItem, error: deleteError, isPending } = useDeleteCartItem(RefetchCart);
    const { changeCartItemCount, IsPendingchangeCartItemCount, ErrorChangeCartItemCount } = useChangeCartItemCount(RefetchCart);
    const { login, getLoginError, IsPendingLogin } = useLogin(toggleAuth);
    const [isLoginPopup, setIsLoginPopup] = useState(true);

    return (
        <header>
            <nav className="navigation">
                <Link to="/">
                    <svg className="navigation-logo" width="137" height="56" viewBox="0 0 137 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M52.8 37.8c-.7-.1-1.3 0-2 .3 0 0-2.6 2.2-15.8-.4-9.7-1.9-14.8-1.7-14.8-1.7s1.7-11.2 1.2-14.4l-.3-.6a.9.9 0 0 0-.6-.2c-1 0-1.6.4-1.6 1 .1 2 0 4.2-.2 6.3a5.4 5.4 0 0 1-5.5 3.5c-4.2-.3-5.1-3.4-5.5-5.4-.4-2.1-.6-8 .5-10.4 0 0 6.4.2 10.4-3.2 4-3.5 3.8-6.4 1.9-7.7-2-1.3-6.4-1-9.8 2-2 1.8-3.5 4-4.5 6.4 0 0-5-1.1-3.9-6.4C3.6 1.4 11 2 11 2c1.6.3 1.7.5 2.2 0 .5-.6.9-2-1.6-2C9.2 0 1.8 1.1.4 6c-1.5 5.3 1.3 9 5 9.6 0 0-2 9.1.5 13.6a8 8 0 0 0 7.7 4.4c1.4 0 4-.8 4.8-2 0 0-.4 3.2-.7 4.4 0 0-6.2 0-8 .9-3.4 1.8-2.7 5.9-1.4 7.3 1 1.3 4.3 2 6.6.8a8.9 8.9 0 0 0 5-6.9 35 35 0 0 1 11 1.2 83.2 83.2 0 0 0 15.5 3.2c2.3 0 7.1-.6 7.4-2.6.2-1.2-.3-2-1-2.1ZM14 7.8s3-2.3 4.3-1a2 2 0 0 1 .1 2.6c-.6.8-2.1 3.2-9.5 4.4 0 0 2.3-4 5.1-6Zm.3 34.9s-4 2.2-4.5-.8a2.9 2.9 0 0 1 1.5-3.2c.7-.4 1.6-.8 5.8-.7a5.7 5.7 0 0 1-2.8 4.7Z" fill="#2D3440" /><path d="M65.5 21.3V27.5a5 5 0 0 1-.8 2.3 5 5 0 0 1-1 1.3c-.5.4-.8-.5-1-.9-1.2-2.6-.6-6.1-.1-8.8.2-1.4-2.4-1-2.6.2-.5 2.3-.7 4.7-.5 7a1.7 1.7 0 0 0-1.2.7c-.5 1-1.8 4.3-3.4 3-1.2-1-1.3-3.4-1.5-4.8-.1-1.9.1-3.8.8-5.6 0 .1 1-2.6 1.5-1.5a3.3 3.3 0 0 1-.6 2.8c-1.4 1 .8 1.5 1.6.8 1.6-1.2 2.7-5.1 0-5.6-3.1-.5-4.9 2.6-5.5 5.1-.4 1.5-.5 3-.5 4.4-.4.8-1.8 3.2-2.7 3.6-1 .5-1-.2-1-.6l.8-7.5c.2-1 0-2.2-.4-3.3-.4-.7-3.6-2.5-6.4.8-1.6 1.7-2.5 4-2.7 6.3l-.7 1.2c-1.3 2.5-3 3.5-3.6 1.8-.6-1.8-.8-3.7-.7-5.6 2.1-3.2 3.6-6.8 4.5-10.5 1.4-6 1.1-9 .4-9.5-.7-.5-3.8-1.7-5.6 5.6a48.4 48.4 0 0 0-1.4 16.1L30 28.5c-1.4 2.5-3 3.5-3.6 1.8-.6-1.8-.9-3.7-.7-5.6 2-3.2 3.6-6.8 4.5-10.5 1.4-6.1 1.1-9 .4-9.6-.7-.5-3.8-1.7-5.6 5.6a41 41 0 0 0-.5 20.8s1 3 2.8 2.8c1.5-.2 3.3-1.6 4.3-4.4l.4 1.6s1 3 2.8 2.8c1.2-.1 2.7-1.2 3.7-3 .6 1.6 2 3 3.7 2.7 2.4-.5 2.9-1.8 2.9-1.8s0 2.2 1.5 2.2c1.3 0 2.4-.8 3.5-2.9l.7-1.3c.3 2 1 3.6 2.6 4.3 2.7 1.2 5-1 6.4-3.2a3.9 3.9 0 0 0 2.2 2.3 3.3 3.3 0 0 0 3.4-.8v3.2c-.5 0-1 0-1.4.3a10.5 10.5 0 0 0-3.7 9.5 3 3 0 0 0 1.4 2.3 2.9 2.9 0 0 0 2.8 0c2.7-1.2 3.1-5.3 3.4-7.9.5-6.1.1-12.5.1-18.7 0-1.1-2.6-.6-2.6.3ZM27 11.3c.6-2.4 1.2-3.4 1.8-3.4.6 0 .8.7.4 2.7-.8 4-2 7.8-3.6 11.5 0 0 .8-8.4 1.4-10.8Zm7.5 0c.6-2.4 1.2-3.4 1.8-3.4.5 0 .8.7.4 2.7s-1.8 7.8-3.7 11.5c0 0 1-8.4 1.5-10.8ZM46 22.5c0 .5-.4 3.8-1 5.6-.4 1.8-.7 2.5-2.2 3-1.4.7-2.1-1.2-2.1-1.2-1-2.9.3-5.4 1.5-7.1 1-1.7 2.2-1.9 2.9-1.8a1.2 1.2 0 0 1 .9 1v.5Zm19.5 16.2c.1 2.4-.4 4.8-1.4 7-.6.1-.9-.1-1-1.1-.2-1-.2-2 0-3a8.1 8.1 0 0 1 2.4-4.6v1.7ZM82.2 18.8a9.6 9.6 0 0 1-5.1-5.4c-1.1-3.4 2.6-6 5.6-5.8 3 .1 4.6 3.2 4.4 6 0 1-.6 3.2-1.8 2-.8-.9-1.3-2-1.4-3.2-.2-1.1-2.8-.5-2.6.7.5 3.3 4 6.9 7 3.5A6.6 6.6 0 0 0 86 6.5a9 9 0 0 0-11.2 3.9c-2.4 4.3 2.5 8.6 6 10.1 5.5 3 5.7 12.7-1.7 12.7a7.4 7.4 0 0 1-6.8-5c-.5-1.5-.3-6.8 1.8-7.2 1.6-.3 1.1-1.8-.4-1.5-3.3.6-4.6 5-4.2 8 .5 4.7 5 7.4 9.4 7.4a8.5 8.5 0 0 0 8.6-6.8 8.5 8.5 0 0 0-5.3-9.3Z" fill="#2D3440" /><path d="M98.7 33c-2.5-1.3-1-6.7-.7-8.8.3-1.3 1.4-3.4-.4-3.9-2.1-.5-4.7 1.5-6.5 3.5 0-2.3.2-4.5.5-6.7a14 14 0 0 0 6.4-6.7c1.1-2.3 1.7-7.2-2.2-5.7-3.6 1.2-4.8 5.4-5.9 8.7l-1 3.9-1 .4c-1.5.5-1.3 1.3.2.8l.7-.2c-.7 5-.3 10.3.2 15.2 0 .5 2.7 0 2.6-.7a119 119 0 0 1-.5-6.6c.3 0 .4-.2.6-.3a20.1 20.1 0 0 1 3.6-3.6l.4-.3c.6-.4.7-.4.3 0l-.5 2.6c-.5 2.7-2 8 1.2 9.7.6.3 3-.7 2-1.2ZM93 11.5 94 9c.4-1 1.6-4.3 2.4-2.7.6 1.3-.4 3.4-.9 4.6-.7 1.9-1.9 3.5-3.5 4.8.2-1.5.6-2.9 1-4.3Z" fill="#2D3440" /><path d="M108.3 26.8c0-3-.3-6.8-3.8-7-3.9-.4-5.4 3.6-5.4 6.6a.5.5 0 0 0 .3.6c0 2.8.7 6.5 4 6.4 3.7 0 4.9-3.3 4.9-6.6Zm-4.5 4.9c-2.1-.9-2-4.7-1.8-6.5a.5.5 0 0 0-.2-.5c.3-1.8 1-4.5 2.5-3.1 1.3 1 1.3 3.7 1.4 5.2 0 1 0 5.6-1.8 4.9ZM136.3 43c-1-2.6-3.1-3.6-5.6-3.7-.2-.7-.6-1.3-1-1.9-3.4-5.2-11.7-4.5-17.3-1.8l-.1-2.4a6.5 6.5 0 0 0 5.8-2.7c1.5-2.2 1.2-6 .7-8.4-.6-2.3-2.8-1.9-4.4-1.1l-1.7 1.1.2-1.8c0-1.3-2.6-1-2.7.2-.4 5.6-.2 11.1-.4 16.7a13.3 13.3 0 0 0-4.7 10.9c0 2 1.7 3.6 3.5 2.1 2.6-2 3.4-6 3.7-9 .2-1.3.2-2.7.2-4A12.4 12.4 0 0 1 126 37c.9.7 1.6 1.5 2 2.5-1.4.2-2.8.7-4 1.3-1.6.7-3.9 2.5-3.8 4.4a2.7 2.7 0 0 0 2 2.7l.3.1c5.5 1 9.6-2.4 8.8-7 2.7 1.5 3.7 5 2.7 7.8-2.1 6.6-10.3 8-15 3.7-.6-.5-3 .5-2.5.9 6.9 6.3 24 .5 19.8-10.4Zm-26.6-1.6a14 14 0 0 1-1.7 6s-.3.1-.3-.6c0-2.5.7-5 2-7v1.6Zm2.8-16 .1-.2a12.6 12.6 0 0 1 3.3-3.6c.3.1.6.9.7 1.9.3 2.5.4 9-3.5 8.5l-.9.1c0-2.3.1-4.5.3-6.7ZM124 46.7c-1.5-.4-1.4-1.8-1.2-2.8.5-2.3 3.2-3.5 5.5-3.6 1.1 3.3.2 7.1-4.3 6.4Z"
                        fill="#2D3440" /></svg>
                </Link>

                <ul className="navigation-list">
                    <li className="navigation-item">
                        <Link className="navigation-link navigation-link-catalog" to="/catalog">Каталог</Link>
                        {/* <div className="clickable" style={{ "background": "#FCC850" }}></div>
                        <div className="popover-catalog">
                            <a className="popover-catalog-title-hot" href="#">Новинки</a>
                            <a className="popover-catalog-title" href="#">Сливочное</a>
                            <a className="popover-catalog-title" href="#">Щербеты</a>
                            <a className="popover-catalog-title" href="#">Фруктовый лед</a>
                            <a className="popover-catalog-title" href="#">Мелорин</a>
                        </div> */}
                    </li>
                    <li className="navigation-item">
                        <a className="navigation-link" href="#" >Доставка и оплата</a>
                    </li>
                    <li className="navigation-item">
                        <a className="navigation-link" href="#" >О компании</a>
                    </li>
                </ul>
                <ul className="navigation-list navigation-user">
                    <li className="navigation-item">
                        <a className="navigation-link navigation-phone" href="tel:+78005558628">+7 800 555-86-28</a>
                    </li>
                    <li className="navigation-item">
                        {isLoginPopup ?
                            <Popover trigger={Button}>
                                <div className="popover popover-entry ">
                                    <Link to='/account'><h3 className="popover-title">Личный кабинет</h3></Link>
                                    <form onSubmit={(e) => handleSubmit(e, login)} className="popover-entry-form">
                                        <input name="email" placeholder="Логин" />
                                        <input type="password" name="password" placeholder="Пароль" />
                                        <div className="popover-entry-info">
                                            <button className="additional-button popover-button" type="submit">Войти</button>
                                            <a className="popover-link" href="#">Забыли пароль?</a>
                                            <button type="button" onClick={() => setIsLoginPopup(false)} className="popover-link" >Регистрация</button>
                                        </div>
                                    </form>
                                </div>
                            </Popover>
                            :
                            <Popover trigger={Button}>
                                <div className="popover popover-entry ">
                                    <h3 className="popover-title">Личный кабинет</h3>
                                    <form onSubmit={(e) => handleRegister(e, login)} className="popover-entry-form">
                                        <input name="name" placeholder="Логин" />
                                        <input type="password" name="Пароль" placeholder="Пароль" />
                                        <input name="name" placeholder="Имя пользователя" />
                                        <input name="email" type="email" placeholder="email@mail.ru" />
                                        <div className="popover-entry-info">
                                            <button className="additional-button popover-button" type="submit">Регистрация</button>
                                            <a className="popover-link" href="#">Забыли пароль?</a>
                                            <button type="button" onClick={() => setIsLoginPopup(true)} className="popover-link">Зарегистрировались? Войти</button>
                                        </div>
                                    </form>
                                </div>
                            </Popover>}
                    </li>
                    <li className="navigation-item">
                        <Popover trigger={Button2}>
                            {data ?
                                <div className="popover popover-cart">
                                    <h3 className="popover-title">Корзина</h3>
                                    <ul className="popover-list">
                                        {data?.map((cartItem: CartItem) =>
                                            <li key={cartItem.item.id} className="popover-item">
                                                <img src={cartItem.item.icon} width="46" height="46" alt="малиновое мороженое" />
                                                <p className="popover-item-title">{cartItem.item.name}</p>
                                                <button onClick={() => changeCartItemCount({ newCount: cartItem.countInCart - 1, productId: cartItem.item.id })} className="popover-button-decrease">{IsPendingchangeCartItemCount ? <Loader2 /> : "-"}</button>
                                                <p className="popover-item-amount">{cartItem.countInCart * 100 / 1000} кг х {cartItem.item.costPer100g * 10} Р</p>
                                                <p className="popover-item-price">{cartItem.countInCart * cartItem.item.costPer100g} Р</p>
                                                <button onClick={() => changeCartItemCount({ newCount: cartItem.countInCart + 1, productId: cartItem.item.id })} className="popover-button-increase">{IsPendingchangeCartItemCount ? <Loader2 /> : "+"}</button>
                                                <button onClick={() => deleteCartItem(cartItem.item.id)} className="popover-item-button-close" type="button"></button>
                                            </li>
                                        )}
                                    </ul>
                                    <div className="popover-cart-info">
                                        <Link to='/pay'><button className="additional-button popover-button" type="button">Оформить заказ</button></Link>
                                        <p className="popover-result">Итого: {getTotalPrice(data!)} Р</p>
                                    </div>
                                </div> :
                                <div className="popover popover-cart-empty">
                                    <h3 className="popover-title">Ваша корзина пока пуста</h3>
                                </div>}
                        </Popover>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
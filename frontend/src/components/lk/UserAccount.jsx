import useGetOrder from "../../api/user/getOrder";
import useGetUser from "../../api/user/getUser";
import Code from "./code/Code";
import Field from "./field/Field";
import Order from "./order/Order";
import "./user-account.scss";

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
import { useAppContext } from "../..";

function UserAccount() {

    const getTotalPrice = (data) => {
        let totalPrice = 0;
        data?.forEach(element => {
            totalPrice += element.item.costPer100g * element.countInCart;
        });
        return totalPrice;
    }

    const user = useGetUser();
    const order = useGetOrder();
    
    const { auth, toggleAuth } = useAppContext();
    const { data, getCartError, IsPendingGetCart, RefetchCart } = useGetCart(auth);
    const { mutate: deleteCartItem, error: deleteError, isPending } = useDeleteCartItem(RefetchCart);
    const { changeCartItemCount, IsPendingchangeCartItemCount, ErrorChangeCartItemCount } = useChangeCartItemCount(RefetchCart);
    const { login, getLoginError, IsPendingLogin } = useLogin(toggleAuth);
    const [isLoginPopup, setIsLoginPopup] = useState(true);

    return (
        <main className="main-container">
            <div className="avatar">
                <img src="https://www.svgrepo.com/show/192247/man-user.svg" width={150} alt="avatar" />
            </div>
            <div className="first-line">
                <div className="fields">
                    <Field head="Пользователь" placeholder={user.data?.name} name="name" type="text" className="user" />
                    <Field head="Email" placeholder={user.data?.email} name="email" type="email" className="email" />
                    <Field head="Номер телефона" placeholder="+7 (544)-584-5222" name="phone" type="phone" className="tel" />
                </div>
                {/* {data ?
                    <div className="popover popover-cart cart-in-user">
                        <h3 className="popover-title">Корзина</h3>
                        <ul className="popover-list">
                            {data?.map((cartItem) =>
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
                            <p className="popover-result">Итого: {getTotalPrice(data)} Р</p>
                        </div>
                    </div> :
                    <div className="popover popover-cart-empty">
                        <h3 className="popover-title">Ваша корзина пока пуста</h3>
                    </div>} */}
            </div>
            <div className="line">
                <h2>Текущие заказы:</h2>
                <hr />
            </div>
            <div className="second-line">
                <div className="orders">
                    {
                        order.data?.map(element => {
                            let priceTotal = Number(element.costPer100g) * Number(element.count);
                            return <Order 
                                imageSrc={element.icon}
                                name={element.name}
                                description={element.tag + element.category} 
                                price={element.costPer100g}
                                orderPrice={priceTotal}
                                className="red-status"
                                status='В пути' 
                            />
                        })
                    }
                </div>
                <div className="qr-code">
                    <Code code="254275" />
                </div>
            </div>
        </main>
    );
}

export default UserAccount;
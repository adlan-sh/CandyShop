import useGetOrder from "../../api/user/getOrder";
import useGetUser from "../../api/user/getUser";
import Code from "./code/Code";
import Field from "./field/Field";
import Order from "./order/Order";
import "./user-account.scss";

function UserAccount() {
    const user = useGetUser();
    const order = useGetOrder();
    return (
        <main className="main-container">
            <div className="avatar">
                <img src="./../../images/lk/default-avatar.svg" alt="avatar" />
            </div>
            <div className="first-line">
                <div className="fields">
                    <Field head="Пользователь" placeholder={user.data?.name} name="name" type="text" className="user" />
                    <Field head="Email" placeholder={user.data?.email} name="email" type="email" className="email" />
                    <Field head="Номер телефона" placeholder="+7 (544)-584-5222" name="phone" type="phone" className="tel" />
                </div>
                {/* <div className="cart">
                <div className="popover-cart">
                    <h3 className="popover-title">Корзина</h3>
                    <ul className="popover-list">
                        <li className="popover-item">
                            <img src="/images/circle-raspberry-ice-cream.jpg" width="46" height="46" alt="малиновое мороженое" />
                            <p className="popover-item-title">Малинка</p>
                            <p className="popover-item-amount">1 кг х 310 Р</p>
                            <p className="popover-item-price">310 Р</p>
                            <button className="popover-item-button-close" type="button"></button>
                        </li>
                        <li className="popover-item">
                            <img src="/images/circle-bubble-gum-ice-cream.jpg" width="46" height="46" alt="Бабл-гам мороженое" />
                            <p className="popover-item-title">Бабл-гам</p>
                            <p className="popover-item-amount">1,5 кг х 320 Р</p>
                            <p className="popover-item-price">480 Р</p>
                            <button className="popover-item-button-close" type="button"></button>
                        </li>
                    </ul>
                    <div className="popover-cart-info">
                        <button className="additional-button popover-button" type="button">Оформить заказ</button>
                        <p className="popover-result">Итого: 790 Р</p>
                    </div>
                </div>
                </div> */}
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
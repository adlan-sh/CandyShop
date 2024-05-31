import { useState } from "react";
import useGetCart from "../api/cart/getCartRequest";

function Payment() {
    const [auth, isAuth] = useState(false);
    const cart = useGetCart(auth);
    let totalPrice = 0;

    cart.data?.forEach(element => {
        totalPrice += element.item.count * element.item.costPer100g;
    });

    return (
    <div>
        <link rel="stylesheet" href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css" />
        <form className="yoomoney-payment-form" action="https://yookassa.ru/integration/simplepay/payment" method="post" accept-charset="utf-8" >
            <div className="ym-payment-btn-block ym-align-space-between">
                <div className="ym-input-icon-rub">
                    <input readOnly value={totalPrice} name="sum" placeholder="0.00" className="ym-input ym-sum-input ym-required-input" type="number" step="any" />
                </div>
                <button data-text="Заплатить" className="ym-btn-pay ym-result-price">
                    <span className="ym-text-crop">Заплатить</span> 
                    <span className="ym-price-output"></span>
                </button>
                
                <linearGradient id="paint0_linear" x1="57.3564" y1="0" x2="57.3564" y2="63" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0160D1">
                        <stop offset="1" stop-color="#00479C"></stop>
                    </stop>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="12.8472" y1="9.35889" x2="12.8472" y2="55.2393" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0160D1">
                        <stop offset="1" stop-color="#00479C"></stop>
                    </stop>
                </linearGradient>
            </div>
            <input name="shopId" type="hidden" value="383439" />
        </form>
        <script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js"></script>
    </div>
    );
}

export default Payment;
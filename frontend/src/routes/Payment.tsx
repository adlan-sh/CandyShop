import { useState } from "react";
import useGetCart from "../api/cart/getCartRequest";
import useDeleteCart from "../api/user/deleteCart";
import useDeleteCartItem from "../api/cart/deleteCartItem";
import usePay from "../api/user/pay";

type Product = {
    id: number;
    name: string;
    count: number;
    icon: string;
    costPer100g: number;
    category: string;
    tag: string;
    hidden: boolean
}

function Payment() {
    const [auth, isAuth] = useState(false);
    const { data } = useGetCart(auth);
    const { mutate, isPending, error } = useDeleteCartItem(auth);
    const { pay } = usePay();
    let totalPrice = 0;

    const handleDelete = async (idProd: number) => {
        const delProduct = await mutate(
            idProd
        );
    }

    const handlePay = async(prods: Product[]) => {
        console.log(prods);
        const order = await pay(prods);
    }

    let func = () => {};
    let funcPay = () => {};

    let product: Product;

    data?.forEach(async (element) => {
        let product = {
            name: element.item.name, 
            id:element.item.id,  
            count:element.item.count, 
            icon:element.item.icon, 
            costPer100g:element.item.costPer100g, 
            category:element.item.category, 
            tag:element.item.tag, 
            hidden:element.item.hidden, 
    
        };
        totalPrice += element.item.count * element.item.costPer100g;
        func = () => handleDelete(element.item.id);
        funcPay = () => handlePay([product]);
    });

    const handleClick = () => {
        func();
        funcPay();
    }

    return (
    <div>
        <link rel="stylesheet" href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css" />
        <form className="yoomoney-payment-form" action="https://yookassa.ru/integration/simplepay/payment" method="post" accept-charset="utf-8" >
            <div className="ym-payment-btn-block ym-align-space-between">
                <div className="ym-input-icon-rub">
                    <input readOnly value={totalPrice} name="sum" placeholder="0.00" className="ym-input ym-sum-input ym-required-input" type="number" step="any" />
                </div>
                <button onClick={handleClick} data-text="Заплатить" className="ym-btn-pay ym-result-price">
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
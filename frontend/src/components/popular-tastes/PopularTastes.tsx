import "./popularTastes.scss";
import CircleRaspberryIceCream from "../../images/circle-raspberry-ice-cream.jpg";
import CirclePistachioIceCream from "../../images/circle-pistachio-ice-cream.jpg";
import CircleBlueberryIceCream from "../../images/circle-blueberry-ice-cream.jpg";
import CircleBubbleGumIceCream from "../../images/circle-bubble-gum-ice-cream.jpg";
import useAddCartItem from '../../api/cart/addToCartRequest';
import { ProductType } from "../../api/product/product.type";
import useGetProducts from "../../api/product/getProducts";
import useGetCart from "../../api/cart/getCartRequest";


const PopularTastes = () => {
    const { RefetchCart } = useGetCart(false);

    const { mutate } = useAddCartItem(RefetchCart);
    const { data, IsPendingGetProducts, getProductsError } = useGetProducts();


    return (
        <section className="popular-tastes">
            <h2 className="popular-tastes-main-title">Попробуйте самые популярные<br /> вкусы нашего мороженого</h2>
            <ul className="popular-tastes-list">
                {data?.products.map((product: ProductType) =>
                    <li className="popular-tastes-item">
                        <img src={product.icon} width="168" height="168" alt="Малиновый шарик мороженого" />
                        <h3 className="popular-tastes-title"> {product.name}</h3>
                        <p className="popular-tastes-description">
                            Сливочное мороженое
                            с малиновым джемом
                        </p>
                        <span className="popular-tastes-price">{product.costPer100g * 10} Р/кг</span>
                        <button onClick={() => mutate(product.id)} className="button popular-tastes-button" type="button">
                            <svg className="popular-tastes-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.31.49a.67.67 0 0 0 0 1.33h2.06l.54 2.7.01.05 1.1 5.44a1.97 1.97 0 0 0 1.96 1.6h6.32a1.97 1.97 0 0 0 1.96-1.6l1.05-5.47a.67.67 0 0 0-.66-.8H5.12l-.55-2.71a.67.67 0 0 0-.65-.54h-2.6Zm5.01 9.26L5.4 5.08h9.46l-.9 4.68a.64.64 0 0 1-.63.5H6.96a.64.64 0 0 1-.64-.5Zm-1.1 4.44a1.32 1.32 0 1 1 2.63 0 1.32 1.32 0 0 1-2.64 0Zm7.16 0a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0Z"
                                fill="currentColor" /></svg>
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </li>)}
            </ul>
        </section>
    )
}

export default PopularTastes
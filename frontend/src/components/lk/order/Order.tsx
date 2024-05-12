import './order.scss'

type OrderType = {
    imageSrc: string;
    name: string;
    description: string;
    price: string;
    orderPrice: string;
    status: string;
    className: string
}

function Order ({imageSrc, name, description, price, orderPrice, status, className}: OrderType) {
    return (
        <div className='order'>
            <div className='image'>
                <img src={`./../../../images/${imageSrc}`} alt='itemImage'></img>
            </div>
            <div className='item-desc'>
                <h5>{name}</h5>
                <p>{description}</p>
                <h5>{price} ₽/кг</h5>
            </div>
            <div className='price'>
                <h5>Цена</h5>
                <h5>{orderPrice} ₽</h5>
            </div>
            <div className='status'>
                <h5>Статус</h5>
                <div className={`status-type ${className}`} >
                    {status}
                </div>
            </div>
        </div>
    );
}

export default Order;
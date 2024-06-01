import React from 'react'
import useGetProducts from '../../api/product/getProducts'
import { ProductType } from '../../api/product/product.type';
import "./productList.scss";
import useGetHiddenProducts from '../../api/product/getHiddenProducts';

type Props = {}

const ProductList = (props: Props) => {
    const { data } = useGetProducts();

    const { hidData } = useGetHiddenProducts();

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Количество</th>
                    <th>Цена за 100г</th>
                    <th>Тег</th>
                    <th>Иконка</th>
                    <th>Скрыто</th>
                </tr>
            </thead>
            <tbody>
            {
                data?.products.map((el) => {
                    return <ListItem 
                    name={el.name} 
                    category={el.category} 
                    costPer100g={el.costPer100g} 
                    count={el.count} 
                    id={el.id} 
                    tag={el.tag} 
                    hidden={el.hidden} 
                    icon={el.icon} />
                })
            }
            {
                hidData?.map((el) => {
                    return <ListItem 
                    name={el.name} 
                    category={el.category} 
                    costPer100g={el.costPer100g} 
                    count={el.count} 
                    id={el.id} 
                    tag={el.tag} 
                    hidden={true} 
                    icon={el.icon} />
                })
            }
            </tbody>
        </table>
    );
}

const ListItem = ({name, category, costPer100g, count, id, tag, hidden, icon}: ProductType) => {
    return (
        <tr>
            <th>{id}</th>
            <th>{name}</th>
            <th>{category}</th>
            <th>{count}</th>
            <th>{costPer100g}</th>
            <th>{tag}</th>
            <th>{icon}</th>
            <th>{hidden ? "Да" : "Нет"}</th>
        </tr>
    );
}

export default ProductList
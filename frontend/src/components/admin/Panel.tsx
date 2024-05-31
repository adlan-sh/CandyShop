import { Check } from 'lucide-react'
import React from 'react'
import useAddProduct from '../../api/admin/addProduct'
import './panel.scss'
import useUpdateProduct from '../../api/admin/updateProduct'
import useDeleteProduct from '../../api/admin/removeProduct'

type Props = {}

const Panel = (props: Props) => {
    const { addProduct } = useAddProduct();
    const { updateProduct } = useUpdateProduct();
    const { deleteProduct } = useDeleteProduct();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const product = await addProduct(
            { 
                name: e.target[0].value, 
                count: e.target[1].value, 
                icon: `/public/img/${e.target[0].value}.png`,
                costPer100g: e.target[2].value, 
                category: e.target[3].value, 
                tag: e.target[4].value, 
                hidden: false 
            }
        );
    }

    const handleUpdate = async (e: any) => {
        e.preventDefault();
        const updProduct = await updateProduct(
            { 
                id: e.target[0].value,
                name: e.target[1].value, 
                count: e.target[2].value, 
                icon: `/public/img/${e.target[1].value}.png`,
                costPer100g: e.target[3].value, 
                category: e.target[4].value, 
                tag: e.target[5].value, 
                hidden: false 
            }
        );
    }

    const handleDelete = async (e: any) => {
        e.preventDefault();
        const delProduct = await deleteProduct(
                e.target[0].value,
        );
    }

    return (
        <div className='admin-panel'>
            <div className='type'>
            <h2>Добавить продукт</h2>
            <form onSubmit={(e) => handleSubmit(e)} method='POST'>
                <div>
                    <label>Название</label>
                    <input name='name' type='text' />
                </div>
                <div>
                    <label>Количество</label>
                    <input name='count' type='number' />
                </div>
                <div>
                    <label>Цена за 100г</label>
                    <input name='costPer100g' type='number' />
                </div>
                <div>
                    <label>Категория</label>
                    <input name='category' type='text' />
                </div>
                <div>
                    <label>Тег</label>
                    <input name='tag' type='text' />
                </div>
                <button type='submit'>Создать</button>
            </form>
        </div>
        
        <div className='type'>
        <h2>Обновить продукт</h2>
        <form onSubmit={(e) => handleUpdate(e)} method='POST'>
            <div>
                <label>ID</label>
                <input name='id' type='number' />
            </div>
            <div>
                <label>Название</label>
                <input name='name' type='text' />
            </div>
            <div>
                <label>Количество</label>
                <input name='count' type='number' />
            </div>
            <div>
                <label>Цена за 100г</label>
                <input name='costPer100g' type='number' />
            </div>
            <div>
                <label>Категория</label>
                <input name='category' type='text' />
            </div>
            <div>
                <label>Тег</label>
                <input name='tag' type='text' />
            </div>
            <button type='submit'>Обновить</button>
        </form>
        </div>

        <div className="type">
        <h2>Удалить продукт</h2>
        <form onSubmit={(e) => handleDelete(e)} method='POST'>
            <div>
                <label>ID</label>
                <input name='id' type='number' />
            </div>
            <button type='submit'>Удалить</button>
        </form>
        </div>

        </div>
    )
}

export default Panel;
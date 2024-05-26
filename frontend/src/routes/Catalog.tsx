import React from 'react'
import CatalogFilters from '../components/catalog-filters/CatalogFilters'
import IceCreamCatalog from '../components/iceCreamCatalog/IceCreamCatalog'
import Pagination from '../components/pagination/Pagination'
import useGetProducts from '../api/product/getProducts'

const Catalog = () => {
    const { data, IsPendingGetProducts, getProductsError, setPage } = useGetProducts();

    return (
        <main className="main-container">
            <div className='globalTheme' style={{ backgroundColor: "#FFCBD8" }}></div>

            <h1 className="visually-hidden">Каталог</h1>
            <h2 className="catalog-title">Сливочное мороженое</h2>
            <CatalogFilters />
            <IceCreamCatalog data={data?.products} />
            <Pagination refetch={setPage} currentPage={data?.currentPage} totalPages={data?.totalPages} />
        </main>
    )
}

export default Catalog
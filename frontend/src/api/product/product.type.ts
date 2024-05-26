export type ProductType = {
    id: number,
    name: string,
    count: number,
    icon: string,
    costPer100g: number,
    category: string,
    tag: string,
    hidden: boolean
}

export type PaginationProductType = {
    products: ProductType[],
    totalPages: number,
    currentPage: number
};
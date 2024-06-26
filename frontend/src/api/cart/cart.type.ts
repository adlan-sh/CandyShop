import { ProductType } from "../product/product.type"

export type CartItem = {
    id: number,
    item: ProductType,
    countInCart: number
}

export enum ChangeCartItemCountEnum {
    increase = 1,
    decrease = -1
}

export type ChangeCartItemCountRequestType = {
    productId: number;
    newCount: number;
}


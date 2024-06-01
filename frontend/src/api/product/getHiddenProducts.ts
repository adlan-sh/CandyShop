import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { PaginationProductType, ProductType } from "./product.type";
import { useState } from "react";


type Product = {
    id: number,
    name: string;
    count: number;
    icon: string;
    costPer100g: number;
    category: string;
    tag: string;
    hidden: boolean
}

const useGetHiddenProducts = () => {
    const { data, error: getProductsError, isPending: IsPendingGetProducts } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const a = await axios.get<Product[]>(`/api/admin/get-removed-products`)
            console.log(a);
            return a.data;
        },
    });
    const hidData = data;
    console.log(hidData);
    return { hidData, getProductsError, IsPendingGetProducts };
}

export default useGetHiddenProducts;
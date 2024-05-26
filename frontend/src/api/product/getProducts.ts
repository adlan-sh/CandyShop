import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { PaginationProductType, ProductType } from "./product.type";
import { useState } from "react";

const useGetProducts = () => {
    const [page, setPage] = useState(0)
    const { data, error: getProductsError, isPending: IsPendingGetProducts } = useQuery({
        queryKey: ["getProductsRequest", page],
        queryFn: async () => {
            const a = await axios.get<PaginationProductType>(`/api/get-products?page=${page}`)
            console.log(a);
            return a.data;
        },
    });
    return { data, getProductsError, IsPendingGetProducts, setPage };
}

export default useGetProducts;
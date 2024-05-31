import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { PaginationProductType, ProductType } from "./../product/product.type";
import { useState } from "react";

const useGetOrder = () => {
    const { data, error: getProductsError, isPending: IsPendingGetProducts } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const a = await axios.get(`/api/user/get-pending-products`, {   
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
            console.log(a);
            return a.data;
        },
    });
    return { data, getProductsError, IsPendingGetProducts };
}

export default useGetOrder;
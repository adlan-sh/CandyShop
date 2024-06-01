import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { PaginationProductType, ProductType } from "./../product/product.type";
import { useState } from "react";

const useDeleteCart = () => {
    const { data, error: getProductsError, isPending: IsPendingGetProducts } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const a = await axios.delete(`/api/user/remove-from-cart}`, {   
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
            console.log(a);
            return a.data;
        },
    });
    return { data, getProductsError, IsPendingGetProducts };
}

export default useDeleteCart;
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";

type Product = {
    name: string;
    count: number;
    icon: string;
    costPer100g: number;
    category: string;
    tag: string;
    hidden: boolean
}

const useGetProduct = () => {
    const { mutate: getProduct, error: addCartItemError, isPending } = useMutation({
        mutationFn: async (id: number) => {
        const res = await axios.get<Product>(`/api/get-product?id=${id}`,
        {   
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        console.log(res.data)
        return res.data;
        },
    });

    return { getProduct, addCartItemError, isPending };
}

export default useGetProduct;


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

const useAddProduct = () => {
    const { mutate: addProduct, error: addCartItemError, isPending } = useMutation({
        mutationFn: async ({name, count, icon, costPer100g, category, tag, hidden}: Product) => {
        const res = await axios.post(`/api/admin/add-product`, {
            name, count, icon, costPer100g, category, tag, hidden
        },
        {   
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        console.log(res.data)
        },
    });

    return { addProduct, addCartItemError, isPending };
}

export default useAddProduct;


import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";

type Product = {
    id: number;
    name: string;
    count: number;
    icon: string;
    costPer100g: number;
    category: string;
    tag: string;
    hidden: boolean
}

const useUpdateProduct = () => {
    const { mutate: updateProduct, error: addCartItemError, isPending } = useMutation({
        mutationFn: async ({id, name, count, icon, costPer100g, category, tag, hidden}: Product) => {
        const res = await axios.put(`/api/admin/update-product`, {
            id, name, count, icon, costPer100g, category, tag, hidden
        },
        {   
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        console.log(res.data)
        },
    });

    return { updateProduct, addCartItemError, isPending };
}

export default useUpdateProduct;


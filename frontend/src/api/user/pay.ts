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

const usePay = () => {
    const { mutate: pay, error: addCartItemError, isPending } = useMutation({
        mutationFn: async (products: Product[]) => {
        console.log(products);
        const res = await axios.post(`/api/user/pay`, 
        JSON.stringify(products),
        {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, "Content-Type": "application/json" },
        })
        console.log(res.data)
        },
    });

    return { pay, addCartItemError, isPending };
}

export default usePay;


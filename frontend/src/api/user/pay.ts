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
        products.forEach(async (element) => {
            const res = await axios.post(`/api/user/pay`, 
            JSON.stringify([element]),
            {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, "Content-Type": "application/json" },
            })
        });
        },
    });

    return { pay, addCartItemError, isPending };
}

export default usePay;


import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";

const useDeleteCart = () => {
    const { mutate: deleteCart, error: addCartItemError, isPending } = useMutation({
        mutationFn: async (id: number) => {
        const res = await axios.delete(`/api/user/remove-from-cart?productId=${id}`,
        {   
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        console.log(res.data)
        },
    });

    return { deleteCart, addCartItemError, isPending };
}

export default useDeleteCart;


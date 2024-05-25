import { useMutation } from "@tanstack/react-query";
import axios from "../axios";

const useDeleteCartItem = () => {
    const { mutate, isPending, error } = useMutation({
        mutationFn: (cartId: number) => {
            return axios.delete("/api/user/remove-from-cart", { data: cartId });
        }
    })
    return { mutate, isPending, error };
}

export default useDeleteCartItem;
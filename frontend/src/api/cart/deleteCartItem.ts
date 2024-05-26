import { useMutation } from "@tanstack/react-query";
import axios from "../axios";

const useDeleteCartItem = (refetchCart: any) => {
    const { mutate, isPending, error } = useMutation({
        mutationFn: (cartId: number) => {
            return axios.delete(`/api/user/remove-from-cart?productId=${cartId}`,
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );
        },
        onSuccess: () => {
            refetchCart();
        },
    })
    return { mutate, isPending, error };
}

export default useDeleteCartItem;
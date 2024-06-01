import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { toast } from "react-toastify";

type Item = {
    id: number;
}

const useAddCartItem = (refetchCart: any) => {
    const { mutate, error: addCartItemError, isPending } = useMutation({
        mutationFn: async (productId: number) => {
            console.log(productId);
            const a = await axios.post(`/api/user/add-to-cart?productId=${productId}`, {},
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                });
            toast("Товар добавлен в корзину", { type: "success", position: "bottom-right" });
            return a;
        },
        onSuccess: () => {
            refetchCart();
        }

    });

    return { mutate, addCartItemError, isPending };
}

export default useAddCartItem;


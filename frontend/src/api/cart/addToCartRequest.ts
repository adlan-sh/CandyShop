import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";

type Item = {
    id: number;
}

const useAddCartItem = () => {
    const { mutate, error: addCartItemError, isPending } = useMutation({
        mutationFn: (productId: number) => {
            console.log(productId);
            return axios.post(`/api/user/add-to-cart?productId=${productId}`, {},
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                })
        }

    });

    return { mutate, addCartItemError, isPending };
}

export default useAddCartItem;


import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { ChangeCartItemCountRequestType } from "./cart.type";

const useChangeCartItemCount = (refetchCart: any) => {
    const { mutate: changeCartItemCount, isPending: IsPendingchangeCartItemCount, error: ErrorChangeCartItemCount } = useMutation({
        mutationFn: (cartItem: ChangeCartItemCountRequestType) => {
            console.log(cartItem);
            return axios.post(`/api/user/change-cart-item-count?productId=${cartItem.productId}&newCount=${cartItem.newCount}`,
                {},
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
        },
        onSuccess: () => {
            refetchCart();
        },
    })
    return { changeCartItemCount, IsPendingchangeCartItemCount, ErrorChangeCartItemCount };
}

export default useChangeCartItemCount;
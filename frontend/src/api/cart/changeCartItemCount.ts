import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { ChangeCartItemCountEnum } from "./cart.type";

const useChangeCartItemCount = () => {
    const { mutate: changeCartItemCount, isPending: IsPendingchangeCartItemCount, error: ErrorChangeCartItemCount } = useMutation({
        mutationFn: ({ type, cartItemId }: { type: ChangeCartItemCountEnum, cartItemId: number }) => {
            return axios.patch("/api/user/change-cart-item-count", { type, cartItemId });
        }
    })
    return { changeCartItemCount, IsPendingchangeCartItemCount, ErrorChangeCartItemCount };
}

export default useChangeCartItemCount;
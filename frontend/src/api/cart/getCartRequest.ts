import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { CartItem } from "./cart.type";
import { useContext } from "react";

const useGetCart = (auth: boolean) => {
    const { data, error: getCartError, isPending: IsPendingGetCart, refetch: RefetchCart } = useQuery({
        queryKey: ["getCartRequest", auth],
        queryFn: async () => {
            try {
                const a = await axios.get<CartItem[]>("/api/user/get-cart",
                    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })

                console.log(a);
                return a.data;
            } catch (error: any) {
                if (error.response.status = 401) {
                    // toggleAuth(false);
                }
            }

        }
    });
    return { data, getCartError, IsPendingGetCart, RefetchCart }
}

export default useGetCart;
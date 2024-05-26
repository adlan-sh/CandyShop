import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { CartItem } from "./cart.type";

const useGetCart = () => {
    const { data, error: getCartError, isPending: IsPendingGetCart, refetch: RefetchCart } = useQuery({
        queryKey: ["getCartRequest"],
        queryFn: async () => {
            const a = await axios.get<CartItem[]>("/api/user/get-cart",
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
            console.log(a);
            return a.data;
        }
    });
    return { data, getCartError, IsPendingGetCart, RefetchCart }
}

export default useGetCart;
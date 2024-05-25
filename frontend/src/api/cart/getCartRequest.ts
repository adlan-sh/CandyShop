import { useQuery } from "@tanstack/react-query";
import axios from "../axios";

const useGetCart = () => {
    const { data, error: getCartError, isPending: IsPendingGetCart } = useQuery({
        queryKey: ["getCartRequest"],
        queryFn: () =>
            axios.get("/api/user/get-cart")
    });
    return { data, getCartError, IsPendingGetCart }
}

export default useGetCart;
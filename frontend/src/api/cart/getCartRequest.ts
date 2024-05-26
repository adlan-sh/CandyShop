import { useQuery } from "@tanstack/react-query";
import axios from "../axios";

const useGetCart = () => {
    const { data, error: getCartError, isPending: IsPendingGetCart } = useQuery({
        queryKey: ["getCartRequest"],
        queryFn: async () => {
            const a = await axios.get("/api/user/get-cart",
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
            console.log(a);
            return a.data;
        }
    });
    return { data, getCartError, IsPendingGetCart }
}

export default useGetCart;
import { useQuery } from "@tanstack/react-query";
import axios from "../axios";

const useGetProducts = () => {
    const { data, error: getProductsError, isPending: IsPendingGetProducts } = useQuery({
        queryKey: ["getProductsRequest"],
        queryFn: () =>
            axios.get("/api/get-products")
    });
    return { data, getProductsError, IsPendingGetProducts };
}

export default useGetProducts;
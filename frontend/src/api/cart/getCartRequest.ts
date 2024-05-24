import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function getCartRequest(ItemId: number) {
    // const { data: value, error } = useQuery({
    //     queryKey: ["getCartRequest"],
    //     queryFn: () =>
    //         axios.get("/api/cart")
    // });
    // const data = value?.data;
    // return { data, error };
}

export default getCartRequest;
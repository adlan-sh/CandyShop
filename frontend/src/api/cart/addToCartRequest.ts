import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Item = {
    id: number;
}

async function addToCartRequest(ItemId: number) {
    // const {} = useQuery({
    //     queryKey: ["addToCartRequest"],
    //     queryFn: () => 
    //         axios.post("/api/cart", { id: ItemId })
    // });
}


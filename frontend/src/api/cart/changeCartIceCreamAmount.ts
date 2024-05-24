import { useQuery } from "@tanstack/react-query";
import axios from "axios";

enum ChangeEnum {
    increase = 1,
    decrease = -1
}

async function changeCartIceCreamAmount(ItemId: number, changeType: ChangeEnum) {
    // const { data, error } = useQuery({
    //     queryKey: ["changeCartIceCreamAmount"],
    //     queryFn: () =>
    //         axios.get("/api/cart")
    // });
}

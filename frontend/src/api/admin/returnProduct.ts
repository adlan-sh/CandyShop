import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";

const useReturnProduct = () => {
    const { mutate: returnProduct, error: addCartItemError, isPending } = useMutation({
        mutationFn: async (id: number) => {
        const res = await axios.put(`/api/admin/return-product?productId=${id}`, {},
        {   
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        console.log(res.data)
        },
    });

    return { returnProduct, addCartItemError, isPending };
}

export default useReturnProduct;


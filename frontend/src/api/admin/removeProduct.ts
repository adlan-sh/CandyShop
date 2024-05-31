import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";

const useDeleteProduct = () => {
    const { mutate: deleteProduct, error: addCartItemError, isPending } = useMutation({
        mutationFn: async (id: number) => {
        const res = await axios.put(`/api/admin/remove-product?productId=${id}`, {},
        {   
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        console.log(res.data)
        },
    });

    return { deleteProduct, addCartItemError, isPending };
}

export default useDeleteProduct;


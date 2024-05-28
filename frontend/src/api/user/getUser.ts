import { useContext } from "react";
import Context from "../..";
import { useQuery } from "@tanstack/react-query";
import axios from "../axios";

type UserType = {
    name: string;
    email: string;
}

const useGetUser = () => {
    const user = useContext(Context);

    const { data, error: getUserError, isPending: IsPendingGetUser } = useQuery({
        queryKey: ["getUser"],
        queryFn: async () => {
            const a = await axios.get<UserType>(`/api/user/get-user`,
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

            );
            user.name = a.data.name;
            return a.data;
        },
    });
    return { data, getUserError, IsPendingGetUser };
}

export default useGetUser;
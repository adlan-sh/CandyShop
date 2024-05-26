import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";

const useLogin = () => {
    const { mutate: login, error: getLoginError, isPending: IsPendingLogin } = useMutation({
        mutationFn: async ({ login, password }: { login: string, password: string }) => {
            console.log(login, password);
            const res = await axios.post(`/api/login?login=${login}&password=${password}&register=false`);
            localStorage.setItem("token", res.data)
        }

    });
    return { login, getLoginError, IsPendingLogin }
}

export default useLogin;
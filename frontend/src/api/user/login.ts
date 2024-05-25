import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";

const useLogin = () => {
    const { mutate: login, error: getLoginError, isPending: IsPendingLogin } = useMutation({
        mutationFn: ({ login, password }: { login: string, password: string }) => {
            console.log(login, password);
            return axios.post(`/api/login?login=${login}&password=${password}&register=false`);
        }

    });
    return { login, getLoginError, IsPendingLogin }
}

export default useLogin;
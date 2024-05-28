import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { useContext } from "react";
import Context from "../..";
import { toast } from "react-toastify";

type AuthRequestType = {
    login?: string;
    password?: string;
    register?: boolean;
    email?: string;
    username?: string;
}

const useLogin = () => {
    const user = useContext(Context)

    const { data, mutate: login, error: getLoginError, isPending: IsPendingLogin } = useMutation({
        mutationFn: async ({ login, password, register, email, username }: AuthRequestType) => {
            console.log(login, password,);
            const res = await axios.post(`/api/login?login=${login}&password=${password}&register=${register}${email ? `&email=${email}` : ""}${username ? `&username=${username}` : ""}`);
            register ? toast("Вы успешно зарегистрировались!", { type: "success" }) : toast(`Вы вошли в аккаунт ${res.data.name}`, { type: "success" });
            console.log(res.data);
            user.name = res.data.name;
            localStorage.setItem("token", res.data.token)
        },

    });
    return { login, getLoginError, IsPendingLogin, }
}

export default useLogin;
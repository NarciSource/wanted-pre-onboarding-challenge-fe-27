import axios from "axios";

const host = import.meta.env.VITE_API_HOST;

interface LoginParameters {
    email: string;
    password: string;
}

interface LoginResponse {
    message: string;
    token: string;
}

export default async function loginUser({
    email,
    password,
}: LoginParameters): Promise<LoginResponse> {
    const response = await axios.post<LoginResponse>(host + "/users/login", {
        email,
        password,
    });

    return response.data;
}

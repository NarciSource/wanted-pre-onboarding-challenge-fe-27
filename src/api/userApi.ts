import axios from "axios";
import userResponseInterceptor from "./interceptors/userResponse";

const baseURL = import.meta.env.VITE_API_HOST + "/users";

export interface UserParameters {
    email: string;
    password: string;
}

export interface UserResponse {
    message: string;
    token: string;
}

export interface UserError {
    status: number;
    statusText: string;
    data: {
        details: string;
    };
}

const userApi = axios.create({
    baseURL,
});

userResponseInterceptor(userApi);

export default userApi;

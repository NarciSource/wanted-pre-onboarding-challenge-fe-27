import axios from "axios";

const host = import.meta.env.VITE_API_HOST;

export interface LoginParameters {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    token: string;
}

export interface LoginError {
    status: number;
    statusText: string;
    data: {
        details: string;
    };
}

export default async function loginUser({
    email,
    password,
}: LoginParameters): Promise<LoginResponse> {
    try {
        const response = await axios.post<LoginResponse>(host + "/users/login", {
            email,
            password,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                throw error.response;
            }
        }
        throw error;
    }
}

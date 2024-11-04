import axios from "axios";

const host = import.meta.env.VITE_API_HOST;

export interface SignUpParameters {
    email: string;
    password: string;
}

export interface SignUpResponse {
    message: string;
    token: string;
}

export interface SignUpError {
    status: number;
    statusText: string;
    data: {
        details: string;
    };
}

export default async function signUpUser({
    email,
    password,
}: SignUpParameters): Promise<SignUpResponse> {
    try {
        const response = await axios.post<SignUpResponse>(host + "/users/create", {
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

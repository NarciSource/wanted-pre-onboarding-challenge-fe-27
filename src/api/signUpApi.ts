import axios from "axios";

const host = import.meta.env.VITE_API_HOST;

interface SignUpParameters {
    email: string;
    password: string;
}

interface SignUpResponse {
    message: string;
    token: string;
}

export default async function signUpUser({
    email,
    password,
}: SignUpParameters): Promise<SignUpResponse> {
    const response = await axios.post<SignUpResponse>(host + "/users/create", {
        email,
        password,
    });

    return response.data;
}

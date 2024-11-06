import userApi, { UserResponse } from "@/api/userApi";

export interface LoginParameters {
    email: string;
    password: string;
}

export default async function fetchLogin({
    email,
    password,
}: LoginParameters): Promise<UserResponse> {
    const response = await userApi.post<UserResponse>("/login", {
        email,
        password,
    });

    return response.data;
}

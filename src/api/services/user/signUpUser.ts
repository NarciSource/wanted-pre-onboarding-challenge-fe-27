import userApi, { UserResponse } from "@/api/userApi";

export interface SignupParameters {
    email: string;
    password: string;
}

export default async function signUpUser({
    email,
    password,
}: SignupParameters): Promise<UserResponse> {
    const response = await userApi.post<UserResponse>("/create", {
        email,
        password,
    });

    return response.data;
}

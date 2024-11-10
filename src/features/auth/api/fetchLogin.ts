import userApi from "../lib/userApi";
import LoginRequestDTO from "../model/LoginRequestDTO";
import UserResponseDTO from "../model/UserResponseDTO";

export default async function fetchLogin({ email, password }: LoginRequestDTO) {
    const response = await userApi.post<UserResponseDTO>("/login", {
        email,
        password,
    });

    return response.data;
}

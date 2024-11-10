import userApi from "../lib/userApi";
import SignupRequestDTO from "../model/SignupRequestDTO";
import UserResponseDTO from "../model/UserResponseDTO";

export default async function fetchSignUp({ email, password }: SignupRequestDTO) {
    const response = await userApi.post<UserResponseDTO>("/create", {
        email,
        password,
    });

    return response.data;
}

import LoginCredential from "@/entities/LoginCredential";
import fetchLogin from "../api/fetchLogin";
import UserResponseDTO from "../model/UserResponseDTO";

export default async function login({ email, password }: LoginCredential) {
    const credential = new LoginCredential(email, password);

    const isValid = await LoginCredential.validate(credential);
    if (isValid) {
        const data: UserResponseDTO = await fetchLogin({ email, password });

        localStorage["token"] = data.token;

        return data;
    } else {
        localStorage.removeItem("token");

        throw "유효성 검사 실패";
    }
}

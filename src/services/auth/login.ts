import LoginCredential from "@/entities/LoginCredential";
import fetchLogin from "@/api/services/user/fetchLogin";
import { UserResponse } from "@/api/userApi";

export default async function login({ email, password }: LoginCredential): Promise<UserResponse> {
    const credential = new LoginCredential(email, password);

    const isValid = await LoginCredential.validate(credential);
    if (isValid) {
        const data = await fetchLogin({ email, password });

        localStorage["token"] = data.token;

        return data;
    } else {
        localStorage.removeItem("token");

        throw "유효성 검사 실패";
    }
}

import fetchSignUp from "@/api/services/user/fetchSignUp";
import { UserResponse } from "@/api/userApi";
import SignUpCredential from "@/entities/SignUpCredential";

export default async function signUp({
    email,
    password,
}: Omit<SignUpCredential, "conformPassword">): Promise<UserResponse> {
    const credential = new SignUpCredential(email, password, password);

    const isValid = await SignUpCredential.validate(credential);
    if (isValid) {
        const data = await fetchSignUp({ email, password });

        localStorage["token"] = data.token;

        return data;
    } else {
        localStorage.removeItem("token");

        throw "유효성 검사 실패";
    }
}

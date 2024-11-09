import SignUpCredential from "@/entities/SignUpCredential";
import fetchSignUp from "../api/fetchSignUp";
import UserResponseDTO from "../model/UserResponseDTO";

export default async function signUp({
    email,
    password,
}: Omit<SignUpCredential, "conformPassword">) {
    const credential = new SignUpCredential(email, password, password);

    const isValid = await SignUpCredential.validate(credential);
    if (isValid) {
        const data: UserResponseDTO = await fetchSignUp({ email, password });

        localStorage["token"] = data.token;

        return data;
    } else {
        localStorage.removeItem("token");

        throw "유효성 검사 실패";
    }
}

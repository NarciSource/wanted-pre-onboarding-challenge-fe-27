import * as Yup from "yup";

export default class AuthCredential {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    static validateSchema = Yup.object().shape({
        email: Yup.string().email("유효한 이메일을 입력하세요.").required("이메일은 필수입니다."),
        password: Yup.string()
            .min(8, "비밀번호는 최소 8자입니다.")
            .required("비밀번호는 필수입니다."),
    });
}

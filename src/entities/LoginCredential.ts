import * as Yup from "yup";

export default class LoginCredential {
    constructor(public email: string, public password: string) {}

    static async validate({ email, password }: LoginCredential): Promise<boolean> {
        try {
            await LoginCredential.validateSchema.validate({
                email,
                password,
            });

            return true;
        } catch (error) {
            console.error("유효성 검사 실패", error);

            return false;
        }
    }

    static validateSchema = Yup.object().shape({
        email: Yup.string().email("유효한 이메일을 입력하세요.").required("이메일은 필수입니다."),
        password: Yup.string()
            .min(8, "비밀번호는 최소 8자입니다.")
            .required("비밀번호는 필수입니다."),
    });
}

import * as Yup from "yup";

export default class TodoItem {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;

    constructor(title: string, content: string, id: string, createdAt: string, updatedAt: string) {
        this.title = title;
        this.content = content;
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static validateSchema = Yup.object()
        .shape({
            id: Yup.string(),
            title: Yup.string().max(16, "제목은 최대 16자입니다.").required("제목은 필수입니다."),
            content: Yup.string()
                .max(256, "내용은 최대 256자입니다.")
                .required("비밀번호는 필수입니다."),
        })
        .noUnknown(true);
}

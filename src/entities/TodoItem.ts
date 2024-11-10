import * as Yup from "yup";

export enum Priority {
    URGENT = "urgent",
    NORMAL = "normal",
    LOW = "low",
}

export default class TodoItem {
    constructor(
        public id: string,
        public title: string,
        public content: string,
        public createdAt: Date,
        public updatedAt: Date,
        public priority?: Priority,
    ) {}

    static validateSchema = Yup.object()
        .shape({
            id: Yup.string(),
            title: Yup.string().max(16, "제목은 최대 16자입니다.").required("제목은 필수입니다."),
            content: Yup.string()
                .max(1024, "내용은 최대 1024자입니다.")
                .required("비밀번호는 필수입니다."),
        })
        .noUnknown(true);
}

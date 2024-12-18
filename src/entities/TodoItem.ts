import * as Yup from "yup";

import Priority from "@/shared/lib/Priority";

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
            title: Yup.string().max(50, "제목은 최대 50자입니다.").required("제목은 필수입니다."),
            content: Yup.string()
                .max(1024, "내용은 최대 1024자입니다.")
                .required("비밀번호는 필수입니다."),
            priority: Yup.string().oneOf(["urgent", "normal", "low"]).optional(),
        })
        .noUnknown(true);
}

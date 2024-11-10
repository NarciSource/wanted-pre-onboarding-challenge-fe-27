import TodoItem from "@/entities/TodoItem";
import TodoUpdateRequestDTO from "./request/TodoUpdateRequestDTO";

export interface TodoFormProps {
    id?: string;
    title?: string;
    content?: string;
    priority?: "urgent" | "normal" | "low";
    onSubmit: (data: TodoUpdateRequestDTO) => void;
}

export type CreateFormData = {
    title: string;
    content: string;
    priority?: "urgent" | "normal" | "low";
};
export type UpdateFormData = TodoItem;

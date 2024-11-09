import TodoItem from "@/entities/TodoItem";
import TodoUpdateRequestDTO from "./request/TodoUpdateRequestDTO";

export interface TodoFormProps {
    id?: string;
    title?: string;
    content?: string;
    onSubmit: (data: TodoUpdateRequestDTO) => void;
}

export type CreateFormData = Pick<TodoItem, "title" | "content">;
export type UpdateFormData = TodoItem;

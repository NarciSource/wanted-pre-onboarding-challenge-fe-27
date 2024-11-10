import TodoItem from "@/entities/TodoItem";
import TodoUpdateRequestDTO from "./request/TodoUpdateRequestDTO";

export interface TodoFormProps {
    id?: string;
    title?: string;
    content?: string;
    onSubmit: (data: TodoUpdateRequestDTO) => void;
}

export type CreateFormData = {
    priority?: "urgent" | "normal" | "low";
    title: string;
    content: string;
  };
export type UpdateFormData = TodoItem;

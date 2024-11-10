import TodoItem from "@/entities/TodoItem";
import createTodo from "../api/createTodo";
import updateTodo from "../api/updateTodo";
import TodoUpdateRequestDTO from "../model/request/UpdateRequestDTO";

export default async function upsetTodo({
    id,
    title,
    content,
    priority,
}: TodoUpdateRequestDTO): Promise<TodoItem> {
    const r = id
        ? await updateTodo({ id, title, content, priority })
        : await createTodo({ title, content, priority });

    return new TodoItem(r.id, r.title, r.content, new Date(r.createdAt), new Date(r.updatedAt));
}

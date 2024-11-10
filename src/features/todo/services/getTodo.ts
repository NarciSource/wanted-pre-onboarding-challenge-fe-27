import TodoItem from "@/entities/TodoItem";
import readTodo from "../api/readTodo";
import { getPriority } from "@/shared/lib/Priority";

export default async function getTodo(todoId: string): Promise<TodoItem> {
    const { id, title, content, createdAt, updatedAt, priority } = await readTodo({ id: todoId });

    return new TodoItem(
        id,
        title,
        content,
        new Date(createdAt),
        new Date(updatedAt),
        getPriority(priority),
    );
}

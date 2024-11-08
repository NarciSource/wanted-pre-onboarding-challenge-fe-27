import readTodo from "@/api/services/todo/readTodo";
import TodoItem from "@/entities/TodoItem";

export default async function getTodo(todoId: string): Promise<TodoItem> {
    const { id, title, content, createdAt, updatedAt } = await readTodo({ id: todoId });

    return new TodoItem(id, title, content, new Date(createdAt), new Date(updatedAt));
}

import TodoItem from "@/entities/TodoItem";
import readAllTodo from "../api/readAllTodo";

export default async function getAllTodos(): Promise<TodoItem[]> {
    const todos = await readAllTodo();

    return todos.map(
        ({ id, title, content, createdAt, updatedAt }) =>
            new TodoItem(id, title, content, new Date(createdAt), new Date(updatedAt)),
    );
}

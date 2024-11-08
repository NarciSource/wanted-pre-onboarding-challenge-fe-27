import readAllTodo from "@/api/services/todo/readAllTodo";
import TodoItem from "@/entities/TodoItem";

export default async function getAllTodos(): Promise<TodoItem[]> {
    const todos = await readAllTodo();

    return todos.map(
        ({ id, title, content, createdAt, updatedAt }) =>
            new TodoItem(id, title, content, new Date(createdAt), new Date(updatedAt)),
    );
}

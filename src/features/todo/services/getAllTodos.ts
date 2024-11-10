import TodoItem from "@/entities/TodoItem";
import readAllTodo from "../api/readAllTodo";
import { getPriority } from "@/shared/lib/Priority";
import TodosRequestDTO from "../model/request/TodosRequestDTO";

export default async function getAllTodos({ params }: TodosRequestDTO): Promise<TodoItem[]> {
    const todos = await readAllTodo({ params });

    return todos.map(
        ({ id, title, content, createdAt, updatedAt, priority }) =>
            new TodoItem(
                id,
                title,
                content,
                new Date(createdAt),
                new Date(updatedAt),
                getPriority(priority),
            ),
    );
}

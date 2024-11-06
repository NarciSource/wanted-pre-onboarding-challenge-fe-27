import readAllTodo from "@/api/services/todo/readAllTodo";
import TodoItem from "@/entities/TodoItem";

export default function getAllTodos(): Promise<TodoItem[]> {
    return readAllTodo();
}

import readTodo from "@/api/services/todo/readTodo";
import TodoItem from "@/entities/TodoItem";

export default function getTodo(id: string): Promise<TodoItem> {
    return readTodo({ id });
}

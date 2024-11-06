import createTodo from "@/api/services/todo/createTodo";
import updateTodo from "@/api/services/todo/updateTodo";
import TodoItem from "@/entities/TodoItem";

interface Parameters {
    id?: string;
    title: string;
    content: string;
}

export default function upsetTodo({ id, title, content }: Parameters): Promise<TodoItem> {
    return id ? updateTodo({ id, title, content }) : createTodo({ title, content });
}

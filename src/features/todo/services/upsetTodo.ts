import TodoItem from "@/entities/TodoItem";
import createTodo from "../api/createTodo";
import updateTodo from "../api/updateTodo";

interface Parameters {
    id?: string;
    title: string;
    content: string;
}

export default async function upsetTodo({ id, title, content }: Parameters): Promise<TodoItem> {
    const r = id ? await updateTodo({ id, title, content }) : await createTodo({ title, content });

    return new TodoItem(r.id, r.title, r.content, new Date(r.createdAt), new Date(r.updatedAt));
}

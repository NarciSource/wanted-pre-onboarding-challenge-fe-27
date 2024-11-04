import todoApi, { TodoResponse } from "@/api/todoApi";

export interface TodoParameters {
    id?: string;
    title: string;
    content: string;
}

export default async function updateTodo({
    id,
    title,
    content,
}: TodoParameters): Promise<TodoResponse> {
    const response = await todoApi.put<TodoResponse>(`/${id}`, { title, content });

    return response.data;
}

import todoApi, { TodoResponse } from "@/api/todoApi";

export interface TodoParameters {
    title: string;
    content: string;
}

export default async function createTodo(todoParameters: TodoParameters): Promise<TodoResponse> {
    const response = await todoApi.post<TodoResponse>("/", todoParameters);

    return response.data;
}

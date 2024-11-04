import todoApi, { TodoResponse } from "@/api/todoApi";

export interface TodoParameters {
    id: string;
}

export default async function readTodo({ id }: TodoParameters): Promise<TodoResponse> {
    const response = await todoApi.get<TodoResponse>(`/${id}`);

    return response.data;
}

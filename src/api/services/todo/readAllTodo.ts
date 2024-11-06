import todoApi, { TodoListResponse } from "@/api/todoApi";

export default async function readAllTodo(): Promise<TodoListResponse> {
    const response = await todoApi.get("/");

    return response.data;
}

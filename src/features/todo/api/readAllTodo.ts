import todoApi from "../lib/todoApi";
import TodoListResponseDTO from "../model/response/TodoListResponseDTO";

export default async function readAllTodo() {
    const response = await todoApi.get<TodoListResponseDTO>("/");

    return response.data;
}

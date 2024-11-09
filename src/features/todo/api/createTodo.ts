import todoApi from "../lib/todoApi";
import TodoCreateRequestDTO from "../model/request/TodoCreateRequestDTO";
import TodoResponseDTO from "../model/response/TodoResponseDTO";

export default async function createTodo(dto: TodoCreateRequestDTO) {
    const response = await todoApi.post<TodoResponseDTO>("/", dto);

    return response.data;
}

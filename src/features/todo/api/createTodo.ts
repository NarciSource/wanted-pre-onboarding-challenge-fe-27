import todoApi from "../lib/todoApi";
import TodoCreateRequestDTO from "../model/request/CreateRequestDTO";
import TodoResponseDTO from "../model/response/ResponseDTO";

export default async function createTodo(dto: TodoCreateRequestDTO) {
    const response = await todoApi.post<TodoResponseDTO>("", dto);

    return response.data;
}

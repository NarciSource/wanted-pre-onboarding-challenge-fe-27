import todoApi from "../lib/todoApi";
import TodoUpdateRequestDTO from "../model/request/TodoUpdateRequestDTO";
import TodoResponseDTO from "../model/response/TodoResponseDTO";

export default async function updateTodo(dto: TodoUpdateRequestDTO) {
    const response = await todoApi.put<TodoResponseDTO>(`/${dto.id}`, dto);

    return response.data;
}

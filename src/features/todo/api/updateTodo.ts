import todoApi from "../lib/todoApi";
import TodoUpdateRequestDTO from "../model/request/UpdateRequestDTO";
import TodoResponseDTO from "../model/response/ResponseDTO";

export default async function updateTodo({ id, title, content, priority }: TodoUpdateRequestDTO) {
    const response = await todoApi.put<TodoResponseDTO>(`/${id}`, { title, content, priority });

    return response.data;
}

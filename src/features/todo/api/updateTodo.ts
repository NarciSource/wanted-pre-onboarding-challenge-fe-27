import todoApi from "../lib/todoApi";
import TodoUpdateRequestDTO from "../model/request/TodoUpdateRequestDTO";
import TodoResponseDTO from "../model/response/TodoResponseDTO";

export default async function updateTodo({ id, title, content, priority }: TodoUpdateRequestDTO) {
    const response = await todoApi.put<TodoResponseDTO>(`/${id}`, { title, content, priority });

    return response.data;
}

import todoApi from "../lib/todoApi";
import TodoReadRequestDTO from "../model/request/ReadRequestDTO";
import TodoResponseDTO from "../model/response/ResponseDTO";

export default async function readTodo({ id }: TodoReadRequestDTO) {
    const response = await todoApi.get<TodoResponseDTO>(`/${id}`);

    return response.data;
}

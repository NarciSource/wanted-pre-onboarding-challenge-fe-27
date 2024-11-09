import todoApi from "../lib/todoApi";
import TodoIdRequestDTO from "../model/request/TodoIdRequestDTO";
import TodoResponseDTO from "../model/response/TodoResponseDTO";

export default async function readTodo({ id }: TodoIdRequestDTO) {
    const response = await todoApi.get<TodoResponseDTO>(`/${id}`);

    return response.data;
}

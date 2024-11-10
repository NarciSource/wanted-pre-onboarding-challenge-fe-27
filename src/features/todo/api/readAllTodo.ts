import todoApi from "../lib/todoApi";
import TodosRequestDTO from "../model/request/TodosRequestDTO";
import TodoListResponseDTO from "../model/response/TodoListResponseDTO";

export default async function readAllTodo({ params }: TodosRequestDTO) {
    const response = await todoApi.get<TodoListResponseDTO>("/", { params });

    return response.data;
}

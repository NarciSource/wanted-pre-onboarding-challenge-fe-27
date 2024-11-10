import todoApi from "../lib/todoApi";
import TodosRequestDTO from "../model/request/ListReadRequestDTO";
import TodoListResponseDTO from "../model/response/ListResponseDTO";

export default async function readAllTodo({ params }: TodosRequestDTO) {
    const response = await todoApi.get<TodoListResponseDTO>("", { params });

    return response.data;
}

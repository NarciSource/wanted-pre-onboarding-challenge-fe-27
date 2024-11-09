import todoApi from "../lib/todoApi";
import TodoIdRequestDTO from "../model/request/TodoIdRequestDTO";

export default async function deleteTodo({ id }: TodoIdRequestDTO): Promise<boolean> {
    const response = await todoApi.delete(`/${id}`);

    return response.status === 200;
}

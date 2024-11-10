import todoApi from "../lib/todoApi";
import TodoReadRequestDTO from "../model/request/ReadRequestDTO";

export default async function deleteTodo({ id }: TodoReadRequestDTO): Promise<boolean> {
    const response = await todoApi.delete(`/${id}`);

    return response.status === 200;
}

import todoApi from "@/api/todoApi";

export interface TodoParameters {
    id: string;
}

export default async function deleteTodo({ id }: TodoParameters): Promise<boolean> {
    const response = await todoApi.delete(`/${id}`);

    return response.status === 200;
}

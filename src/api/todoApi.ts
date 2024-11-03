import axios from "axios";

const host = import.meta.env.VITE_API_HOST;

export interface TodoItemHeader {
    Authorization: string;
}

export interface TodoItemResponse {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}

export default async function getTodoItem(headers: TodoItemHeader, id: string) {
    const response = await axios.get(host + "/todos/" + id, {
        headers: { ...headers },
    });

    return response.data.data;
}

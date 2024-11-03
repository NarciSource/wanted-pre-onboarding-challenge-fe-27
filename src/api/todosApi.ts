import axios from "axios";

const host = import.meta.env.VITE_API_HOST;

export interface TodoListHeader {
    Authorization: string;
}

export interface TodoItemResponse {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface TodoListError {
    status: number;
    statusText: string;
    data: {
        details: string;
    };
}

export type TodoListResponse = TodoItemResponse[];

export default async function getTodoList(headers: TodoListHeader) {
    const response = await axios.get(host + "/todos", {
        headers: { ...headers },
    });

    console.log(response.data.data)
    return response.data.data;
}

import axios from "axios";
import { TodoItemResponse } from "./readTodo";

const host = import.meta.env.VITE_API_HOST;

export interface TodoListHeader {
    Authorization: string;
}

export interface TodoListError {
    status: number;
    statusText: string;
    data: {
        details: string;
    };
}

export type TodoListResponse = TodoItemResponse[];

export default async function readAllTodo(headers: TodoListHeader) {
    const response = await axios.get(host + "/todos", {
        headers: { ...headers },
    });

    return response.data.data;
}

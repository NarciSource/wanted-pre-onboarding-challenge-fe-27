import axios from "axios";
import todoRequestInterceptor from "./interceptors/todoRequest";
import todoResponseInterceptor from "./interceptors/todoResponse";

const baseURL = import.meta.env.VITE_API_HOST + "/todos";

export interface TodoError {
    status: number;
    statusText: string;
    data: {
        details: string;
    };
}

export interface TodoResponse {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}

const todoApi = axios.create({
    baseURL,
});

todoRequestInterceptor(todoApi);
todoResponseInterceptor(todoApi);

export default todoApi;

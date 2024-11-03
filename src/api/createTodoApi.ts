import axios from "axios";

const host = import.meta.env.VITE_API_HOST;

export interface TodoParameters {
    title: string;
    content: string;
}

export interface TodoItemResponse {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface TodoError {
    status: number;
    statusText: string;
    data: {
        details: string;
    };
}

export default async function createTodo(
    todoParameters: TodoParameters,
): Promise<TodoItemResponse> {
    try {
        const response = await axios.post<TodoItemResponse>(host + "/todos", todoParameters, {
            headers: {
                Authorization: localStorage["token"],
            },
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                throw error.response;
            }
        }
        throw error;
    }
}

import axios from "axios";

const host = import.meta.env.VITE_API_HOST;

export interface TodoParameters {
    id?: string;
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

export default async function updateTodo({
    id,
    title,
    content,
}: TodoParameters): Promise<TodoItemResponse> {
    try {
        const response = await axios.put<TodoItemResponse>(
            host + "/todos/" + id,
            { title, content },
            {
                headers: {
                    Authorization: localStorage["token"],
                },
            },
        );

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

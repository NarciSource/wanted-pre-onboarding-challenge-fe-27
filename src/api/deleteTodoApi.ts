import axios from "axios";

const host = import.meta.env.VITE_API_HOST;

export interface TodoDeleteParameters {
    id: string;
}

export interface TodoError {
    status: number;
    statusText: string;
    data: {
        details: string;
    };
}

export default async function deleteTodo({ id }: TodoDeleteParameters): Promise<boolean> {
    try {
        await axios.delete(host + "/todos/" + id, {
            headers: {
                Authorization: localStorage["token"],
            },
        });

        return true;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                throw error.response;
            }
        }
        throw error;
    }
}

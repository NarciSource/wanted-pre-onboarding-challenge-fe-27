import axios, { AxiosInstance } from "axios";

import TodoError from "../model/TodoError";

export default (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.response.use(
        (response) => {
            return response.data;
        },
        (error) => {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    throw error.response as TodoError;
                }
            }
            throw error;
        },
    );
};

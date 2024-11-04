import axios, { AxiosInstance } from "axios";
import { UserError } from "../userApi";

export default (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    throw error.response as UserError;
                }
            }
            throw error;
        },
    );
};

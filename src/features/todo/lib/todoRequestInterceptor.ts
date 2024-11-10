import { AxiosInstance } from "axios";

export default (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use((config) => {
        // 토큰 인증
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    });
};

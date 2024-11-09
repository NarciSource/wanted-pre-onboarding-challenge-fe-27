import { AxiosInstance } from "axios";

import apiConfigEmitter from "@/shared/lib/apiConfigEmitters";

export default function apiConfig(
    path: string,
    axiosInstance: AxiosInstance,
    interceptors?: ((i: AxiosInstance) => void)[],
) {
    if (interceptors) {
        for (const interceptor of interceptors) {
            interceptor(axiosInstance);
        }
    }

    apiConfigEmitter.on(path, (e) => {
        axiosInstance.defaults.baseURL = e.detail[0] + path;
    });
}

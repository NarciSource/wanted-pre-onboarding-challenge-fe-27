import axios from "axios";

import apiConfig from "@/shared/lib/apiConfig";
import userResponseInterceptor from "./userResponseInterceptor";

const baseURL = import.meta.env.VITE_API_HOST + "/users";

const userApi = axios.create({ baseURL });

const interceptors = [userResponseInterceptor];

apiConfig("/users", userApi, interceptors);

export default userApi;

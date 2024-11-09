import axios from "axios";

import apiConfig from "@/shared/lib/apiConfig";
import todoRequestInterceptor from "./todoRequestInterceptor";
import todoResponseInterceptor from "./todoResponseInterceptor";

const baseURL = import.meta.env.VITE_API_HOST + "/todos";

const todoApi = axios.create({ baseURL });

const interceptors = [todoRequestInterceptor, todoResponseInterceptor];

apiConfig("/todos", todoApi, interceptors);

export default todoApi;

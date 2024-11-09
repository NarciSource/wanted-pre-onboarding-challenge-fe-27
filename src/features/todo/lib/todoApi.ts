import axios from "axios";

import todoRequestInterceptor from "./todoRequest";
import todoResponseInterceptor from "./todoResponse";

const baseURL = import.meta.env.VITE_API_HOST + "/todos";

const todoApi = axios.create({
    baseURL,
});

todoRequestInterceptor(todoApi);
todoResponseInterceptor(todoApi);

export default todoApi;

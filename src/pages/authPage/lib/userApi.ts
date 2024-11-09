import axios from "axios";

import userResponseInterceptor from "./userResponse";

const baseURL = import.meta.env.VITE_API_HOST + "/users";

const userApi = axios.create({
    baseURL,
});

userResponseInterceptor(userApi);

export default userApi;

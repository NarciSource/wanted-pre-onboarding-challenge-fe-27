import { useEffect, useState } from "react";

import todoApi from "@/features/todo/lib/todoApi";
import userApi from "@/pages/authPage/lib/userApi";
import ping from "../lib/ping";

export default function useServerHealth(
    url: string,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
    const [isServerOnline, setServerOnline] = useState<boolean>(false);

    useEffect(() => {
        const handler = setTimeout(async () => {
            const response = await ping(url);
            setServerOnline(response);
            localStorage.setItem("serverHost", url);

            userApi.defaults.baseURL = url + "/users";
            todoApi.defaults.baseURL = url + "/todos";
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [url]);

    return [isServerOnline, setServerOnline];
}

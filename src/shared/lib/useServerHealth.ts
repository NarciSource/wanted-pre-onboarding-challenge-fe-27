import { useEffect, useState } from "react";

import ping from "./ping";
import apiConfigEmitter from "./apiConfigEmitters";

export default function useServerHealth(
    url: string,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
    const [isServerOnline, setServerOnline] = useState<boolean>(false);

    useEffect(() => {
        const handler = setTimeout(async () => {
            const isOnline: boolean = await ping(url);

            // online 상태 설정
            setServerOnline(isOnline);

            // 새로운 url 설정
            if (isOnline) {
                localStorage.setItem("serverHost", url);

                apiConfigEmitter.emitAll(url);
            }
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [url]);

    return [isServerOnline, setServerOnline];
}

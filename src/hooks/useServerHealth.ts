import { useEffect, useState } from "react";

import ping from "@/api/services/serverHealthy/ping";

export default function useServerHealth(url: string) {
    const [isServerOnline, setServerOnline] = useState<boolean>(false);

    useEffect(() => {
        const handler = setTimeout(async () => {
            const response = await ping(url);
            setServerOnline(response);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [url]);

    return { isServerOnline, setServerOnline };
}

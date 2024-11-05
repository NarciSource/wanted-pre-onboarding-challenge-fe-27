import axios, { AxiosError } from "axios";

export default async function ping(url: string): Promise<boolean> {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeout = setTimeout(() => {
        controller.abort();
    }, 2000);

    try {
        await axios.get(url, { signal });
        return true;
    } catch (error) {
        if ((error as AxiosError).code === "ERR_BAD_RESPONSE") {
            return true;
        }
        return false;
    } finally {
        clearTimeout(timeout);
    }
}

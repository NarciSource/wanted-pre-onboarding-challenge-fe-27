import { createContext, ReactNode, useState } from "react";

import useServerHealth from "@/shared/lib/useServerHealth";

interface ContextType {
    serverHost: string;
    isServerOnline: boolean;
    setServerHost: (host: string) => void;
    setServerOnline: (status: boolean) => void;
}

const defaultContextValue: ContextType = {
    serverHost: "",
    isServerOnline: false,
    setServerHost: () => {},
    setServerOnline: () => {},
};

const HealthyCheckContext = createContext<ContextType>(defaultContextValue);

export default HealthyCheckContext;

export const HealthyCheckProvider = ({ children }: { children: ReactNode }) => {
    const [serverHost, setServerHost] = useState<string>(() => {
        return localStorage.getItem("serverHost") || import.meta.env.VITE_API_HOST;
    });
    const [isServerOnline, setServerOnline] = useServerHealth(serverHost);

    return (
        <HealthyCheckContext.Provider
            value={{ serverHost, isServerOnline, setServerHost, setServerOnline }}
        >
            {children}
        </HealthyCheckContext.Provider>
    );
};

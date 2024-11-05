import { createContext, useState, ReactNode } from "react";

import useServerHealth from "@/hooks/useServerHealth";

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

export default HealthyCheckContext;

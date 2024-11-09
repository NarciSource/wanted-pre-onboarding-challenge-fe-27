import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function useLoggedIn() {
    const token: string = localStorage["token"];
    const isLoggedIn: boolean = useMemo(() => !!token, [token]);

    const logout = () => {
        localStorage.removeItem("token");
    };

    const navigate = useNavigate();

    return { isLoggedIn, navigate, logout };
}

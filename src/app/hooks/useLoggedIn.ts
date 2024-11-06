import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function useLoggedIn() {
    const token = localStorage["token"];
    const isLoggedIn = useMemo(() => token, [token]);

    const logout = () => {
        localStorage.removeItem("token");
    };

    const navigate = useNavigate();

    return { isLoggedIn, navigate, logout };
}

import { createBrowserRouter } from "react-router-dom";

import AuthPage from "@/pages/auth/AuthPage";

const basename = import.meta.env.VITE_PUBLIC_URL || "/";

const router = createBrowserRouter(
    [
        {
            path: "/auth",
            element: <AuthPage />,
        },
    ],
    {
        basename,
    },
);

export default router;

import { createBrowserRouter } from "react-router-dom";
import AuthPage from "@/pages/auth/AuthPage";
import TodoPage from "@/pages/todo/TodoPage";
import TodoDetailPage from "@/pages/todo/TodoDetailPage";

const basename = import.meta.env.VITE_PUBLIC_URL || "/";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <TodoPage />,
            children: [
                {
                    path: "/detail/:todoId",
                    element: <TodoDetailPage />,
                },
            ],
        },
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

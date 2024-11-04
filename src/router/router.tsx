import { createBrowserRouter } from "react-router-dom";
import AuthPage from "@/pages/auth/AuthPage";
import TodoPage from "@/pages/todo/TodoPage";
import TodoDetailPage from "@/pages/todo/TodoDetailPage";

const router = createBrowserRouter([
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
]);

export default router;

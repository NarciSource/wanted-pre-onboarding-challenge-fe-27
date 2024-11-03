import { createBrowserRouter } from "react-router-dom";
import AuthPage from "@/pages/auth/AuthPage";
import TodoListPage from "@/pages/todo/TodoListPage";
import TodoDetailPage from "@/pages/todo/TodoDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TodoListPage />,
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

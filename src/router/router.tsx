import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import TodoListPage from "@/pages/todo/TodoListPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TodoListPage />,
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import TodoPage from "@/pages/todoPage";
import TodoDetailPage from "@/pages/todoDetailPage";

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
    ],
    {
        basename,
    },
);

export default router;

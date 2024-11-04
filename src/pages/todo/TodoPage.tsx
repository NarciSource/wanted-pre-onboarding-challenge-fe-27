import React from "react";
import { Outlet } from "react-router-dom";

import TodoCardList from "@/components/todoCard/TodoCardList";
import CommonLayout from "@/components/layouts/CommonLayout";

export default function TodoPage(): React.ReactElement {
    return (
        <CommonLayout>
            <TodoCardList />
            <Outlet /> {/* TodoDetailPage */}
        </CommonLayout>
    );
}

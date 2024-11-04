import React from "react";
import { Outlet } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import TodoCardList from "@/components/todoCard/TodoCardList";

export default function TodoPage(): React.ReactElement {
    return (
        <Flex>
            <TodoCardList />
            <Outlet /> {/* TodoDetailPage */}
        </Flex>
    );
}

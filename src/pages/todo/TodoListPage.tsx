import TodoCardList from "@/components/todoList/TodoCardList";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import React from "react";

export default function TodoPage(): React.ReactElement {
    return (
        <Flex>
            <TodoCardList />
            <Outlet />
        </Flex>
    );
}

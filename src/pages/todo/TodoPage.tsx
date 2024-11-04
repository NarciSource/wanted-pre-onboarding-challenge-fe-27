import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react";

import TodoCardList from "@/components/todoCard/TodoCardList";
import CommonLayout from "@/components/layouts/CommonLayout";

export default function TodoPage(): React.ReactElement {
    return (
        <CommonLayout>
            <Flex>
                <Box flex="7">
                    <TodoCardList />
                </Box>
                <Box flex="3" overflow="hidden">
                    <Outlet /> {/* TodoDetailPage */}
                </Box>
            </Flex>
        </CommonLayout>
    );
}

import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react";

import CommonLayout from "@/shared/ui/CommonLayout";
import TodoCardList from "./ui/TodoCardList";

export default function TodoPage(): React.ReactElement {
    return (
        <CommonLayout>
            {(isLoggedIn) =>
                isLoggedIn ? (
                    <Flex>
                        <Box flex="7">
                            <TodoCardList />
                        </Box>
                        <Box flex="3" overflow="hidden">
                            <Outlet /> {/* TodoDetailPage */}
                        </Box>
                    </Flex>
                ) : null
            }
        </CommonLayout>
    );
}

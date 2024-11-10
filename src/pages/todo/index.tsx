import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react";

import TodoCardList from "./ui/CardList";
import CommonLayout from "@/shared/ui/CommonLayout";
import AuthPanel from "@/features/auth/ui/AuthPanel";

export default function TodoPage(): React.ReactElement {
    return (
        <CommonLayout AuthPanel={<AuthPanel />}>
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

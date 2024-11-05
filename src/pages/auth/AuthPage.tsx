import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import LoginFormLayout from "@/components/auth/LoginFormLayout";
import SignUpFormLayout from "@/components/auth/SignUpFormLayout";
import CommonLayout from "@/components/layouts/CommonLayout";

export default function AuthPage(): React.ReactElement {
    return (
        <CommonLayout>
            {(isLoggedIn) =>
                !isLoggedIn ? (
                    <Flex mx="auto">
                        <Box flex="5">
                            <LoginFormLayout />
                        </Box>
                        <Box flex="5">
                            <SignUpFormLayout />
                        </Box>
                    </Flex>
                ) : null
            }
        </CommonLayout>
    );
}

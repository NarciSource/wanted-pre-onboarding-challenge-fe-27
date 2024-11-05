import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import LoginFormLayout from "@/components/auth/LoginFormLayout";
import SignUpFormLayout from "@/components/auth/SignUpFormLayout";
import CommonLayout from "@/components/layouts/CommonLayout";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function AuthPage(): React.ReactElement {
    const bgColor = useColorModeValue("white", "gray.400");

    return (
        <CommonLayout>
            {(isLoggedIn) =>
                !isLoggedIn ? (
                    <Flex mx="auto" bg={bgColor} p={3} borderRadius={5}>
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

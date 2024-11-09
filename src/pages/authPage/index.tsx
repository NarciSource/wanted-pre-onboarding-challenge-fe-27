import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@/widgets/chakra-ui/color-mode";

import CommonLayout from "@/shared/ui/CommonLayout";
import LoginFormLayout from "./ui/LoginFormLayout";
import SignUpFormLayout from "./ui/SignUpFormLayout";

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

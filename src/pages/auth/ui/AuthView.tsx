import React from "react";

import { Flex, Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/shared/chakra-ui/color-mode";

import LoginFormLayout from "@/features/auth/ui/LoginFormLayout";
import SignUpFormLayout from "@/features/auth/ui/SignUpFormLayout";

export default function AuthView(): React.ReactElement {
    const bgColor = useColorModeValue("white", "gray.400");

    return (
        <Flex mx="auto" bg={bgColor} p={3} borderRadius={5}>
            <Box flex="5">
                <LoginFormLayout />
            </Box>
            <Box flex="5">
                <SignUpFormLayout />
            </Box>
        </Flex>
    );
}

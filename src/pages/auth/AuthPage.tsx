import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import CommonLayout from "@/components/layouts/CommonLayout";
import LoginFormLayout from "../../components/auth/LoginFormLayout";
import SignUpFormLayout from "../../components/auth/SignUpFormLayout";

export default function AuthPage(): React.ReactElement {
    return (
        <CommonLayout>
            <Flex mx="auto">
                <Box flex="5">
                    <LoginFormLayout />
                </Box>
                <Box flex="5">
                    <SignUpFormLayout />
                </Box>
            </Flex>
        </CommonLayout>
    );
}

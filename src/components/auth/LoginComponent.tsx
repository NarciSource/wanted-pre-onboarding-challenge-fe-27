import LoginForm from "@/components/auth/LoginForm";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function LoginComponent(): React.ReactElement {
    return (
        <Stack>
            <Heading as="h1">로그인</Heading>

            <LoginForm />

            <Box>
                <Text>회원가입 하기</Text>
            </Box>
        </Stack>
    );
}

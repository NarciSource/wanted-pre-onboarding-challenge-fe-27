import SignUpForm from "@/components/auth/SignUpForm";
import { Heading, Stack } from "@chakra-ui/react";
import React from "react";

export default function SignUpPage(): React.ReactElement {
    return (
        <Stack>
            <Heading as="h1">회원가입</Heading>

            <SignUpForm />
        </Stack>
    );
}

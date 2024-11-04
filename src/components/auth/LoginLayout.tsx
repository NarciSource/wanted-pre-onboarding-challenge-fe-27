import loginUser, { LoginParameters } from "@/api/services/user/loginUser";
import { UserResponse, UserError } from "@/api/userApi";
import LoginForm from "@/components/auth/LoginForm";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginLayout(): React.ReactElement {
    const navigate = useNavigate();

    const mutation = useMutation<UserResponse, UserError, LoginParameters>({
        mutationFn: loginUser,
        onSuccess: ({ token }) => {
            localStorage["token"] = token;
            navigate("/");
        },
        onError: (error) => {
            localStorage.removeItem("token");
            console.error("로그인 실패", error);
        },
    });

    const handleSubmit = async (data: LoginParameters) => {
        mutation.mutate(data);
    };

    return (
        <Stack>
            <Heading as="h1">로그인</Heading>

            <LoginForm onSubmit={handleSubmit} />
            {mutation.error?.data.details}

            <Box>
                <Text>회원가입 하기</Text>
            </Box>
        </Stack>
    );
}

import React from "react";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { Heading, Stack } from "@chakra-ui/react";

import { UserResponse, UserError } from "@/api/userApi";
import { LoginParameters } from "@/api/services/user/fetchLogin";
import LoginCredential from "@/entities/LoginCredential";
import LoginForm from "@/components/user/LoginForm";
import login from "@/services/user/login";

export default function LoginFormLayout(): React.ReactElement {
    const navigate = useNavigate();

    const mutation = useMutation<UserResponse, UserError, LoginParameters>({
        mutationFn: login,
        onSuccess: () => {
            navigate("/");
        },
        onError: (error) => {
            console.error("로그인 실패", error);
        },
    });

    const handleSubmit = async (data: LoginCredential) => {
        mutation.mutate(data);
    };

    return (
        <Stack>
            <Heading as="h2">로그인</Heading>

            <LoginForm onSubmit={handleSubmit} />
            {mutation.error?.data.details}
        </Stack>
    );
}

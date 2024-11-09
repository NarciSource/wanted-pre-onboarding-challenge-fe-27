import React from "react";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { Heading, Stack } from "@chakra-ui/react";

import LoginCredential from "@/entities/LoginCredential";
import UserError from "../model/UserError";
import UserResponseDTO from "../model/UserResponseDTO";
import login from "../services/login";
import LoginForm from "./LoginForm";

export default function LoginFormLayout(): React.ReactElement {
    const navigate = useNavigate();

    const mutation = useMutation<UserResponseDTO, UserError, LoginCredential>({
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

import React from "react";
import { useNavigate } from "react-router-dom";

import { Heading, Stack } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

import SignUpCredential from "@/entities/SignUpCredential";
import UserError from "../model/UserError";
import UserResponseDTO from "../model/UserResponseDTO";
import signUp from "../services/signUp";
import SignUpForm from "./SignUpForm";

export default function SignUpFormLayout(): React.ReactElement {
    const navigate = useNavigate();

    const mutation = useMutation<UserResponseDTO, UserError, SignUpCredential>({
        mutationFn: signUp,
        onSuccess: () => {
            navigate("/");
        },
        onError: (error) => {
            console.error("회원가입 실패", error);
        },
    });

    const handleSubmit = async (data: SignUpCredential) => {
        mutation.mutate(data);
    };

    return (
        <Stack>
            <Heading as="h2">회원가입</Heading>

            <SignUpForm onSubmit={handleSubmit} />
            {mutation.error?.data.details}
        </Stack>
    );
}

import React from "react";
import { useNavigate } from "react-router-dom";

import { Heading, Stack } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

import { UserResponse, UserError } from "@/api/userApi";
import { SignupParameters } from "@/api/services/user/fetchSignUp";
import SignUpCredential from "@/entities/SignUpCredential";
import SignUpForm from "@/components/user/SignUpForm";
import signUp from "@/services/user/signUp";

export default function SignUpFormLayout(): React.ReactElement {
    const navigate = useNavigate();

    const mutation = useMutation<UserResponse, UserError, SignupParameters>({
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

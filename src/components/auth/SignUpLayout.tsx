import signUpUser, { SignupParameters } from "@/api/services/user/signUpUser";
import { UserResponse, UserError } from "@/api/userApi";
import SignUpForm from "@/components/auth/SignUpForm";
import { Heading, Stack } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpComponent(): React.ReactElement {
    const navigate = useNavigate();

    const mutation = useMutation<UserResponse, UserError, SignupParameters>({
        mutationFn: signUpUser,
        onSuccess: ({ token }) => {
            localStorage["token"] = token;
            navigate("/");
        },
        onError: (error) => {
            localStorage.removeItem("token");
            console.error("회원가입 실패", error);
        },
    });

    const handleSubmit = async (data: SignupParameters) => {
        mutation.mutate(data);
    };

    return (
        <Stack>
            <Heading as="h1">회원가입</Heading>

            <SignUpForm onSubmit={handleSubmit} />
            {mutation.error?.data.details}
        </Stack>
    );
}

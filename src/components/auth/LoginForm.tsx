import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useMutation } from "@tanstack/react-query";
import { UserError, UserResponse } from "@/api/userApi";
import loginUser, { LoginParameters } from "@/api/services/user/loginUser";
import LoginCredential from "@/entities/LoginCredential";

export default function LoginForm(): React.ReactElement {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginCredential>({
        // 유효성 검사
        resolver: yupResolver(LoginCredential.validateSchema),
        mode: "onChange",
    });

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

    const onSubmit = handleSubmit(async (data) => {
        mutation.mutate(data);
    });

    return (
        <form onSubmit={onSubmit}>
            <Stack gap="4" align="flex-start" maxW="sm">
                <Field
                    label="이메일"
                    invalid={!!errors.email}
                    errorText={errors.email?.message}
                    required
                >
                    <Input
                        {...register("email", {
                            required: "이메일 입력해주세요",
                        })}
                    />
                </Field>

                <Field
                    label="비밀번호"
                    invalid={!!errors.password}
                    errorText={errors.password?.message}
                    required
                >
                    <PasswordInput
                        {...register("password", {
                            required: "비밀번호 입력해주세요",
                        })}
                    />
                </Field>
            </Stack>

            <Button
                type="submit"
                colorPalette="blue"
                bg={{ base: "colorPalette.600", _dark: "colorPalette.400" }}
                disabled={!isValid}
            >
                제출
            </Button>

            {mutation.error?.data.details}
        </form>
    );
}

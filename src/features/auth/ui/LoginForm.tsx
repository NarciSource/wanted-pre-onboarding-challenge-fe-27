import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "@/shared/chakra-ui/password-input";
import { Field } from "@/shared/chakra-ui/field";

import LoginCredential from "@/entities/LoginCredential";

interface LoginFormProps {
    onSubmit: (data: LoginCredential) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps): React.ReactElement {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginCredential>({
        // 유효성 검사
        resolver: yupResolver(LoginCredential.validateSchema),
        mode: "onChange",
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                mt={5}
                bg={{ base: "colorPalette.600", _dark: "colorPalette.400" }}
                disabled={!isValid}
            >
                제출
            </Button>
        </form>
    );
}

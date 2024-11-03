import { Button, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginCredential from "@/models/LoginCredential";

export default function LoginForm(): React.ReactElement {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginCredential>({
        resolver: yupResolver(LoginCredential.validateSchema),
        mode: "onChange",
    });

    const onSubmit = handleSubmit((data) => console.log(data));

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
                colorPalette="blue"
                bg={{ base: "colorPalette.600", _dark: "colorPalette.400" }}
                disabled={!isValid}
            >
                제출
            </Button>
        </form>
    );
}

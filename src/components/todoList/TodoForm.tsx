import React from "react";
import { Field } from "../ui/field";
import { Button, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TodoItem from "@/entities/TodoItem";

interface TodoParameters {
    title: string;
    content: string;
}

export default function TodoForm(): React.ReactElement {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<TodoParameters>({
        resolver: yupResolver(TodoItem.validateSchema),
        mode: "onChange",
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <form onSubmit={onSubmit}>
            <Stack gap="4" align="flex-start" maxW="sm">
                <Field
                    label="제목"
                    invalid={!!errors.title}
                    errorText={errors.title?.message}
                    required
                >
                    <Input
                        {...register("title", {
                            required: "제목을 입력해주세요",
                        })}
                    />
                </Field>

                <Field
                    label="내용"
                    invalid={!!errors.content}
                    errorText={errors.content?.message}
                    required
                >
                    <Input
                        {...register("content", {
                            required: "내용을 입력해주세요",
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
        </form>
    );
}

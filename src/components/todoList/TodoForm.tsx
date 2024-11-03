import React, { useEffect } from "react";
import { Field } from "../ui/field";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TodoItem from "@/entities/TodoItem";
import { useMutation } from "@tanstack/react-query";
import createTodo, { TodoError, TodoItemResponse } from "@/api/createTodoApi";
import updateTodo from "@/api/updateTodoApi";

interface TodoParameters {
    id?: string;
    title: string;
    content: string;
}

export default function TodoForm({
    id,
    title,
    content,
}: {
    id?: string;
    title?: string;
    content?: string;
}): React.ReactElement {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
    } = useForm<TodoParameters>({
        resolver: yupResolver(TodoItem.validateSchema),
        mode: "onChange",
    });

    const { mutate } = useMutation<TodoItemResponse, TodoError, TodoParameters>({
        mutationFn: id ? updateTodo : createTodo,
        onError: (error) => {
            console.error("Todo 추가 실패", error);
        },
    });

    const onSubmit = handleSubmit((data) => {
        mutate(data);
    });

    useEffect(() => {
        if (id) {
            setValue("id", id);
        }
        if (title) {
            setValue("title", title);
        }
        if (content) {
            setValue("content", content);
        }
    }, [id, title, content, setValue]);

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
                    <Textarea
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

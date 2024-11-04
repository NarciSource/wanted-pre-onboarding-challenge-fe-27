import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { TodoParameters } from "@/api/services/todo/updateTodo";
import TodoItem from "@/entities/TodoItem";

interface TodoFormProps {
    id?: string;
    title?: string;
    content?: string;
    onSubmit: (data: TodoParameters) => void;
}

export default function TodoForm({
    id,
    title,
    content,
    onSubmit,
}: TodoFormProps): React.ReactElement {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
    } = useForm<TodoParameters>({
        // 유효성 검사
        resolver: yupResolver(TodoItem.validateSchema),
        mode: "onChange",
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
        <form onSubmit={handleSubmit(onSubmit)}>
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

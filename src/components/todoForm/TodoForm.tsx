import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, IconButton, Input, Stack, Textarea } from "@chakra-ui/react";
import { FaPushed } from "react-icons/fa6";

import { Field } from "@/components/ui/field";
import { TodoParameters } from "@/api/services/todo/updateTodo";
import TodoItem from "@/entities/TodoItem";

interface TodoFormProps {
    id?: string;
    title?: string;
    content?: string;
    onSubmit: (data: TodoParameters) => void;
}

type CreateFormData = Pick<TodoItem, "title" | "content">;
type UpdateFormData = TodoItem;

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
    } = useForm<CreateFormData | UpdateFormData>({
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
            <Flex justify="flex-end" marginBottom={1}>
                <IconButton
                    type="submit"
                    colorPalette="blue"
                    size="sm"
                    bg={{ base: "colorPalette.600", _dark: "colorPalette.400" }}
                    disabled={!isValid}
                >
                    <FaPushed />
                </IconButton>
            </Flex>

            <Stack gap="4" align="flex-start" maxW="sm" h="100%">
                <Field invalid={!!errors.title} errorText={errors.title?.message} required>
                    <Input
                        placeholder="제목"
                        {...register("title", {
                            required: "제목을 입력해주세요",
                        })}
                    />
                </Field>

                <Field
                    h="100%"
                    invalid={!!errors.content}
                    errorText={errors.content?.message}
                    required
                >
                    <Textarea
                        placeholder="내용"
                        h="100%"
                        {...register("content", {
                            required: "내용을 입력해주세요",
                        })}
                    />
                </Field>
            </Stack>
        </form>
    );
}

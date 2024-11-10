import React, { useEffect } from "react";
import { useController, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, HStack, IconButton, Input, Stack, Textarea } from "@chakra-ui/react";
import { Field } from "@/widgets/chakra-ui/field";
import { FaPushed } from "react-icons/fa6";

import TodoItem from "@/entities/TodoItem";
import { TodoFormProps, CreateFormData, UpdateFormData } from "../model/TodoFormProps";
import { RadioCardItem, RadioCardRoot } from "@/shared/ui/radio-card";

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
        control,
        formState: { errors, isValid },
    } = useForm<CreateFormData | UpdateFormData>({
        // 유효성 검사
        resolver: yupResolver(TodoItem.validateSchema),
        mode: "onChange",
    });

    // controlled 방식 특정 컴포넌트 제어
    const { field } = useController({
        control,
        name: "priority",
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
                    bg="colorPalette.400"
                    _hover={{ bg: "colorPalette.600" }}
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

                <Field invalid={!!errors.content} errorText={errors.content?.message} required>
                    <Textarea
                        placeholder="내용"
                        minH="100px"
                        h="100%"
                        {...register("content", {
                            required: "내용을 입력해주세요",
                        })}
                    />
                </Field>

                <RadioCardRoot size="md" {...field}>
                    <HStack>
                        <RadioCardItem
                            colorPalette="red"
                            cursor="pointer"
                            border={0}
                            _checked={{ boxShadow: "none", bg: "transparent" }}
                            value="urgent"
                        />
                        <RadioCardItem
                            colorPalette="yellow"
                            cursor="pointer"
                            border={0}
                            _checked={{ boxShadow: "none", bg: "transparent" }}
                            value="normal"
                        />
                        <RadioCardItem
                            colorPalette="green"
                            cursor="pointer"
                            border={0}
                            _checked={{ boxShadow: "none", bg: "transparent" }}
                            value="low"
                        />
                    </HStack>
                </RadioCardRoot>
            </Stack>
        </form>
    );
}

import React from "react";

import {
    Box,
    Flex,
    Heading,
    IconButton,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTitle,
    PopoverTrigger,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaPencil } from "react-icons/fa6";

import { TodoResponse } from "@/api/todoApi";
import readTodo from "@/api/services/todo/readTodo";
import TodoFormLayout from "@/components/todoForm/TodoFormLayout";

export default function TodoView({ todoId }: { todoId: string }): React.ReactElement {
    const { data } = useQuery<TodoResponse>({
        // todoView && todoId로 쿼리 업데이트
        queryKey: ["todoView", todoId],
        queryFn: () => readTodo({ id: todoId }),
        enabled: !!todoId,
        // 5분 동안 캐시된 데이터 사용
        staleTime: 1000 * 60 * 5,
    });

    return (
        <>
            {data && (
                <Box>
                    <PopoverRoot>
                        <PopoverTrigger asChild>
                            <Flex justify="flex-end">
                                <IconButton
                                    type="submit"
                                    position="absolute"
                                    mt={5}
                                    colorPalette="blue"
                                    size="sm"
                                    bg={{ base: "colorPalette.600", _dark: "colorPalette.400" }}
                                >
                                    <FaPencil />
                                </IconButton>
                            </Flex>
                        </PopoverTrigger>

                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <PopoverTitle fontWeight="medium">ToDo 추가</PopoverTitle>
                                <TodoFormLayout
                                    id={data.id}
                                    title={data.title}
                                    content={data.content}
                                />
                            </PopoverBody>
                        </PopoverContent>
                    </PopoverRoot>
                    <Stack overflow="hidden" textOverflow="ellipsis">
                        <Heading paddingTop={5}>{data.title}</Heading>

                        <Text p={10}>{data.content}</Text>

                        <Flex justify="flex-end">
                            <Stack textStyle="xs">
                                <Text>생성시간: {new Date(data.createdAt).toLocaleString()}</Text>
                                <Text>수정시간: {new Date(data.updatedAt).toLocaleString()}</Text>
                            </Stack>
                        </Flex>
                    </Stack>
                </Box>
            )}
        </>
    );
}

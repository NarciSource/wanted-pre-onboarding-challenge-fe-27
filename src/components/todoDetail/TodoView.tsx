import React, { useState } from "react";

import { Box, Flex, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaPencil } from "react-icons/fa6";

import { TodoResponse } from "@/api/todoApi";
import readTodo from "@/api/services/todo/readTodo";
import TodoFormLayout from "@/components/todoForm/TodoFormLayout";
import { FaSearch } from "react-icons/fa";

export default function TodoView({ todoId }: { todoId: string }): React.ReactElement {
    const { data } = useQuery<TodoResponse>({
        // todoView && todoId로 쿼리 업데이트
        queryKey: ["todoView", todoId],
        queryFn: () => readTodo({ id: todoId }),
        enabled: !!todoId,
        // 5분 동안 캐시된 데이터 사용
        staleTime: 1000 * 60 * 5,
    });

    const [isEditable, setIsEditable] = useState(false);

    const toggleEditable = () => {
        setIsEditable((prev) => !prev);
    };

    return (
        <>
            {data && (
                <Box>
                    <IconButton
                        onClick={toggleEditable}
                        mt={5}
                        colorPalette="blue"
                        size="sm"
                        bg={{ base: "colorPalette.600", _dark: "colorPalette.400" }}
                    >
                        {isEditable ? <FaSearch /> : <FaPencil />}
                    </IconButton>

                    {isEditable ? (
                        <TodoFormLayout id={data.id} title={data.title} content={data.content} />
                    ) : (
                        <Box
                            overflow="hidden"
                            textOverflow="ellipsis"
                            borderWidth={1}
                            borderColor="gray.300"
                            borderRadius="md"
                            boxShadow="md"
                            mt={3}
                            p={5}
                        >
                            <Heading paddingTop={5}>{data.title}</Heading>

                            <Text p={10}>{data.content}</Text>

                            <Flex
                                justify="flex-end"
                                borderTopWidth={1}
                                borderColor="gray.300"
                                pt={2}
                            >
                                <Stack textStyle="xs">
                                    <Text>
                                        생성시간: {new Date(data.createdAt).toLocaleString()}
                                    </Text>
                                    <Text>
                                        수정시간: {new Date(data.updatedAt).toLocaleString()}
                                    </Text>
                                </Stack>
                            </Flex>
                        </Box>
                    )}
                </Box>
            )}
        </>
    );
}

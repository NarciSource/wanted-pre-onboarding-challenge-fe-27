import React, { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import { Box, IconButton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import TodoItem from "@/entities/TodoItem";
import getTodo from "@/features/todo/services/getTodo";
import TodoEditable from "./TodoEditable";
import TodoView from "./TodoView";

export default function TodoDetail({ todoId }: { todoId: string }): React.ReactElement {
    const { data } = useQuery<TodoItem, Error, TodoItem, [string, string]>({
        // todoView && todoId로 쿼리 업데이트
        queryKey: ["todoView", todoId],
        queryFn: ({ queryKey }) => getTodo(queryKey[1]),
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
                <Box h="100%" color="black">
                    <IconButton
                        onClick={toggleEditable}
                        mt={5}
                        colorPalette="blue"
                        size="sm"
                        bg="colorPalette.400"
                        _hover={{ bg: "colorPalette.600" }}
                    >
                        {isEditable ? <FaSearch /> : <FaPencil />}
                    </IconButton>

                    {isEditable ? <TodoEditable {...data} /> : <TodoView {...data} />}
                </Box>
            )}
        </>
    );
}

import React, { useState } from "react";

import { Box, IconButton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaPencil } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import { TodoResponse } from "@/api/todoApi";
import TodoView from "./TodoView";
import TodoEditable from "./TodoEditable";
import getTodo from "@/services/todo/getTodo";

export default function TodoDetail({ todoId }: { todoId: string }): React.ReactElement {
    const { data } = useQuery<TodoResponse>({
        // todoView && todoId로 쿼리 업데이트
        queryKey: ["todoView", todoId],
        queryFn: () => getTodo(todoId),
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
                <Box h="100%">
                    <IconButton
                        onClick={toggleEditable}
                        mt={5}
                        colorPalette="blue"
                        size="sm"
                        bg={{ base: "colorPalette.500", _dark: "colorPalette.400" }}
                    >
                        {isEditable ? <FaSearch /> : <FaPencil />}
                    </IconButton>

                    {isEditable ? <TodoEditable {...data} /> : <TodoView {...data} />}
                </Box>
            )}
        </>
    );
}

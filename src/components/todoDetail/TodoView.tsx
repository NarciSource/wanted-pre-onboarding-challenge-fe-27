import React from "react";
import {
    Box,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTitle,
    PopoverTrigger,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { TodoResponse } from "@/api/todoApi";
import readTodo from "@/api/services/todo/readTodo";
import TodoForm from "../todoList/TodoForm";

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
                            <Button>ToDo 수정</Button>
                        </PopoverTrigger>

                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <PopoverTitle fontWeight="medium">ToDo 추가</PopoverTitle>
                                <TodoForm id={data.id} title={data.title} content={data.content} />
                            </PopoverBody>
                        </PopoverContent>
                    </PopoverRoot>
                    <Stack>
                        <Text>{data.title}</Text>
                        <Text>{data.createdAt}</Text>
                        <Text>{data.updatedAt}</Text>
                        <Text>{data.content}</Text>
                    </Stack>
                </Box>
            )}
        </>
    );
}

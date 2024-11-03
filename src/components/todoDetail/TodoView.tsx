import getTodoItem from "@/api/todoApi";
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
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Button } from "../ui/button";
import TodoForm from "../todoList/TodoForm";

interface TodoItemParameters {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export default function TodoView({ todoId }: { todoId: string }): React.ReactElement {
    const headers = {
        Authorization: localStorage["token"],
    };

    const { data } = useQuery<TodoItemParameters>({
        queryKey: ["todoView"],
        queryFn: () => getTodoItem(headers, todoId),
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

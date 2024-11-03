import getTodoItem from "@/api/todoApi";
import { Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

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
                <Stack>
                    <Text>{data.title}</Text>
                    <Text>{data.createdAt}</Text>
                    <Text>{data.updatedAt}</Text>
                    <Text>{data.content}</Text>
                </Stack>
            )}
        </>
    );
}

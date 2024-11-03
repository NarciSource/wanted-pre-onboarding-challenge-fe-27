import { Box, For, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import React from "react";
import TodoItemCard from "./TodoItemCard";
import { useQuery } from "@tanstack/react-query";
import getTodoList, { TodoListError, TodoListHeader, TodoListResponse } from "@/api/todosApi";

export default function TodoCardList(): React.ReactElement {
    const headers = {
        Authorization: localStorage["token"],
    };

    const { data } = useQuery<TodoListHeader, TodoListError, TodoListResponse>({
        queryKey: ["todoList"],
        queryFn: () => getTodoList(headers),
    });

    return (
        <Box>
            <Button>추가</Button>
            <Stack>
                <For each={data}>{(each) => <TodoItemCard {...each} key={each.id} />}</For>
            </Stack>
        </Box>
    );
}

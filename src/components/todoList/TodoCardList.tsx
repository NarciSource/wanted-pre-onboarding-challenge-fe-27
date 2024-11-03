import { Box, For, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import React from "react";
import TodoItemCard from "./TodoCardItem";
import { useQuery } from "@tanstack/react-query";
import getTodoList, { TodoListError, TodoListHeader, TodoListResponse } from "@/api/todosApi";
import { Link } from "react-router-dom";

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
                <For each={data}>
                    {(each) => (
                        <Link to={`/detail/${each.id}`}>
                            <TodoItemCard {...each} key={each.id} />
                        </Link>
                    )}
                </For>
            </Stack>
        </Box>
    );
}

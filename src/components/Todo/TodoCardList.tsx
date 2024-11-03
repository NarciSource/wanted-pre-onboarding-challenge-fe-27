import { Box, For, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import React from "react";
import TodoItemCard from "./TodoItemCard";
import TodoList from "@/entities/TodoList";
import TodoItem from "@/entities/TodoItem";

export default function TodoCardList(): React.ReactElement {
    const list = [
        {
            title: "hi",
            content: "hello",
            id: "z3FGrcRL55qDCFnP4KRtn",
            createdAt: "2022-07-24T14:15:55.537Z",
            updatedAt: "2022-07-24T14:15:55.537Z",
        },
        {
            title: "hi",
            content: "hello",
            id: "z3FGrcRL55qDCFnP4KRtn",
            createdAt: "2022-07-24T14:15:55.537Z",
            updatedAt: "2022-07-24T14:15:55.537Z",
        },
    ].map(
        ({ title, content, id, createdAt, updatedAt }) =>
            new TodoItem(title, content, id, createdAt, updatedAt),
    );
    const todoList = new TodoList(list);

    return (
        <Box>
            <Button>추가</Button>
            <Stack>
                <For each={todoList.items}>{(each) => <TodoItemCard {...each} />}</For>
            </Stack>
        </Box>
    );
}

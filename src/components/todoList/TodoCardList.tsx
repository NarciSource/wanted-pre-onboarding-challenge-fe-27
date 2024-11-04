import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    For,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTitle,
    PopoverTrigger,
    Stack,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { TodoError, TodoListResponse } from "@/api/todoApi";
import readAllTodo from "@/api/services/todo/readAllTodo";
import TodoItemCard from "./TodoCardItem";
import TodoLayout from "../todo/TodoLayout";

export default function TodoCardList(): React.ReactElement {
    const { data } = useQuery<undefined, TodoError, TodoListResponse>({
        queryKey: ["todoList"],
        queryFn: readAllTodo,
    });

    return (
        <Box>
            <PopoverRoot>
                <PopoverTrigger asChild>
                    <Button size="sm" variant="outline">
                        ToDo 추가
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                        <PopoverTitle fontWeight="medium">ToDo 추가</PopoverTitle>
                        <TodoLayout />
                    </PopoverBody>
                </PopoverContent>
            </PopoverRoot>

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

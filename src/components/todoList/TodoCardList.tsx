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
import React from "react";
import TodoItemCard from "./TodoCardItem";
import { useQuery } from "@tanstack/react-query";
import readAllTodo, {
    TodoListError,
    TodoListHeader,
    TodoListResponse,
} from "@/api/services/todo/readAllTodo";
import { Link } from "react-router-dom";
import TodoForm from "./TodoForm";

export default function TodoCardList(): React.ReactElement {
    const headers = {
        Authorization: localStorage["token"],
    };

    const { data } = useQuery<TodoListHeader, TodoListError, TodoListResponse>({
        queryKey: ["todoList"],
        queryFn: () => readAllTodo(headers),
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
                        <TodoForm />
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

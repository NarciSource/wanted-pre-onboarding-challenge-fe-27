import React from "react";
import { Link } from "react-router-dom";

import { Box, Card, Flex, For } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { TodoError, TodoListResponse } from "@/api/todoApi";
import readAllTodo from "@/api/services/todo/readAllTodo";
import TodoFormLayout from "@/components/todoForm/TodoFormLayout";
import TodoCardItem from "./TodoCardItem";

export default function TodoCardList(): React.ReactElement {
    const { data } = useQuery<undefined, TodoError, TodoListResponse>({
        queryKey: ["todoList"],
        queryFn: readAllTodo,
    });

    return (
        <Box>
            <Flex direction="row" wrap="wrap" justify="flex-start">
                <Card.Root variant="elevated">
                    <Card.Header>
                        <Card.Title>추가</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <TodoFormLayout />
                    </Card.Body>
                </Card.Root>
                <For each={data?.slice().reverse()}>
                    {(each) => (
                        <Link to={`/detail/${each.id}`}>
                            <TodoCardItem {...each} key={each.id} />
                        </Link>
                    )}
                </For>
            </Flex>
        </Box>
    );
}

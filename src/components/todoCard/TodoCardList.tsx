import React from "react";
import { Link } from "react-router-dom";

import { Box, Flex, For } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { TodoError, TodoListResponse } from "@/api/todoApi";
import readAllTodo from "@/api/services/todo/readAllTodo";
import TodoCardItem from "./TodoCardItem";
import TodoCardAddable from "./TodoCardAddable";
import EmptyCardItem from "./EmptyCardItem";

export default function TodoCardList(): React.ReactElement {
    const { data, isFetching } = useQuery<undefined, TodoError, TodoListResponse>({
        queryKey: ["todoList"],
        queryFn: readAllTodo,
    });

    return (
        <Box>
            <Flex direction="row" wrap="wrap" justify="flex-start">
                <TodoCardAddable />
                {isFetching && new Array(8).fill(0).map((_, i) => <EmptyCardItem key={i} />)}

                <For each={data?.slice().reverse()}>
                    {(each) => (
                        <Link to={`/detail/${each.id}`} key={each.id}>
                            <TodoCardItem {...each} />
                        </Link>
                    )}
                </For>
            </Flex>
        </Box>
    );
}

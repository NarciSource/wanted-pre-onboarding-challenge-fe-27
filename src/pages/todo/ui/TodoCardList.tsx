import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Flex, For } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import TodoCardItem from "./TodoCardItem";
import TodoCardAddable from "./TodoCardAddable";
import EmptyCardItem from "./EmptyCardItem";
import TodoItem from "@/entities/TodoItem";
import getAllTodos from "@/features/todo/services/getAllTodos";
import HealthyCheckContext from "@/shared/HealthyCheckContext";

export default function TodoCardList(): React.ReactElement {
    const { data, isLoading, refetch } = useQuery<TodoItem[]>({
        queryKey: ["todoList"],
        queryFn: getAllTodos,
    });

    const { serverHost } = useContext(HealthyCheckContext);

    useEffect(() => {
        refetch();
    }, [serverHost, refetch]);

    return (
        <Box>
            <Flex direction="row" wrap="wrap" justify="flex-start">
                <TodoCardAddable />
                {isLoading && new Array(8).fill(0).map((_, i) => <EmptyCardItem key={i} />)}
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

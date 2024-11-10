import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { Box, Flex, For } from "@chakra-ui/react";

import TodoCardItem from "./TodoCardItem";
import TodoCardAddable from "./TodoCardAddable";
import EmptyCardItem from "./EmptyCardItem";
import TodoItem from "@/entities/TodoItem";
import getAllTodos from "@/features/todo/services/getAllTodos";
import HealthyCheckContext from "@/shared/HealthyCheckContext";
import TodoPageOptions from "./TodoPageOptions";

export default function TodoCardList(): React.ReactElement {
    const [options, setOptions] = useState<{
        sort: "createdAt" | "updatedAt" | "priority";
        order: "asc" | "desc";
    }>({
        sort: "createdAt",
        order: "asc",
    });

    const { data, isLoading, refetch } = useQuery<TodoItem[]>({
        queryKey: ["todoList"],
        queryFn: () => getAllTodos({ params: options }),
    });

    const { serverHost } = useContext(HealthyCheckContext);

    useEffect(() => {
        refetch();
    }, [serverHost, refetch, options]);

    return (
        <Box>
            <TodoPageOptions options={options} setOptions={setOptions} />

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

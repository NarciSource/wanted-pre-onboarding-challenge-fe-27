import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { Box, Flex, For } from "@chakra-ui/react";

import TodoCardItem from "./card/Item";
import TodoCardAddable from "./card/Addable";
import EmptyCardItem from "./card/EmptyItem";
import TodoItem from "@/entities/TodoItem";
import getAllTodos from "@/features/todo/services/getAllTodos";
import HealthyCheckContext from "@/shared/HealthyCheckContext";
import TodoPageOptions from "./PageOptions";

export default function TodoCardList(): React.ReactElement {
    const [options, setOptions] = useState<{
        sort: "createdAt" | "updatedAt" | "priority";
        order: "asc" | "desc";
        priorityFilter?: "urgent" | "normal" | "low";
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

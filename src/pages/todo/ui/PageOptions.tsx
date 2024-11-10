import React from "react";
import { RxDividerVertical } from "react-icons/rx";

import { HStack, Icon } from "@chakra-ui/react";

import TodoFilterOption from "./option/Filter";
import TodoOrderOption from "./option/Order";
import TodoSortOption from "./option/Sort";
import TodoKeywordOption from "./option/Keyword";

type Options = {
    sort: "createdAt" | "updatedAt" | "priority";
    order: "asc" | "desc";
    priorityFilter?: "urgent" | "normal" | "low";
    keyword?: string;
};

export default function TodoPageOptions({
    options,
    setOptions,
}: {
    options: Options;
    setOptions: React.Dispatch<React.SetStateAction<Options>>;
}): React.ReactElement {
    const handleOptionChange = (name: string, value: string | null) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [name]: value,
        }));
    };

    return (
        <HStack justify="center" mb={5}>
            <TodoSortOption sort={options.sort} handleOptionChange={handleOptionChange} />
            <Icon color="grey" mx={7}>
                <RxDividerVertical />
            </Icon>

            <TodoOrderOption order={options.order} handleOptionChange={handleOptionChange} />
            <Icon color="grey" mx={7}>
                <RxDividerVertical />
            </Icon>

            <TodoFilterOption
                priorityFilter={options.priorityFilter}
                handleOptionChange={handleOptionChange}
            />
            <Icon color="grey" mx={7}>
                <RxDividerVertical />
            </Icon>

            <TodoKeywordOption handleOptionChange={handleOptionChange} />
        </HStack>
    );
}

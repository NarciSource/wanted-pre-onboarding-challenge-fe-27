import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react/card";

import TodoDeleteButton from "./TodoDeleteButton";

interface TodoItemParameters {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export default function TodoItemCard({
    id,
    title,
    content,
}: TodoItemParameters): React.ReactElement {
    return (
        <Card.Root variant="elevated" key={id} margin={3} h={300} w={300}>
            <Card.Header position="absolute">
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Flex justify="flex-end">
                    <TodoDeleteButton todoId={id} />
                </Flex>
                <Box>{content}</Box>
            </Card.Body>
        </Card.Root>
    );
}

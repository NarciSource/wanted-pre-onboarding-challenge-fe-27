import React from "react";

import { Flex, HStack, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react/card";

import TodoItem from "@/entities/TodoItem";
import TodoDeleteButton from "./DeleteButton";
import PriorityIcon from "@/shared/ui/PriorityIcon";

export default function TodoItemCard({
    id,
    title,
    content,
    priority,
}: TodoItem): React.ReactElement {
    const colors = ["blue", "red", "green", "yellow", "purple", "teal", "orange"];

    const getRandomColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor + ".50";
    };

    return (
        <Card.Root
            variant="elevated"
            key={id}
            margin={3}
            h={300}
            w={300}
            bg={getRandomColor()}
            color="black"
        >
            <Card.Header position="absolute">
                <HStack>
                    {priority && <PriorityIcon priority={priority} />}
                    <Card.Title>{title}</Card.Title>
                </HStack>
            </Card.Header>
            <Card.Body>
                <Flex justify="flex-end">
                    <TodoDeleteButton todoId={id} />
                </Flex>
                <Text lineClamp="9">{content}</Text>
            </Card.Body>
        </Card.Root>
    );
}

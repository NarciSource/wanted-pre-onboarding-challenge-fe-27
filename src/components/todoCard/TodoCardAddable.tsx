import React from "react";

import { Card } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

import TodoFormLayout from "@/components/todoForm/TodoFormLayout";

export default function TodoCardAddable(): React.ReactElement {
    return (
        <Card.Root
            variant="elevated"
            margin={3}
            h={300}
            w={300}
            bg={useColorModeValue("white", "gray.100")}
            color="black"
        >
            <Card.Header position="absolute">
                <Card.Title>Todo 추가</Card.Title>
            </Card.Header>
            <Card.Body>
                <TodoFormLayout />
            </Card.Body>
        </Card.Root>
    );
}

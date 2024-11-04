import React from "react";

import { Card } from "@chakra-ui/react";

import TodoFormLayout from "@/components/todoForm/TodoFormLayout";

export default function TodoCardAddable(): React.ReactElement {
    return (
        <Card.Root variant="elevated">
            <Card.Header>
                <Card.Title>추가</Card.Title>
            </Card.Header>
            <Card.Body>
                <TodoFormLayout />
            </Card.Body>
        </Card.Root>
    );
}

import { Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react/card";
import { Stack } from "@chakra-ui/react/stack";
import React from "react";

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
    createdAt,
    updatedAt,
}: TodoItemParameters): React.ReactElement {
    return (
        <Card.Root variant="elevated" key={id}>
            <Card.Header>
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <Card.Body>{content}</Card.Body>
            <Card.Footer>
                <Stack>
                    <Text>{createdAt}</Text>
                    <Text>{updatedAt}</Text>
                </Stack>
            </Card.Footer>
        </Card.Root>
    );
}

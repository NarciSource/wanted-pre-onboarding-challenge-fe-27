import React from "react";

import { Box } from "@chakra-ui/react";

import TodoItem from "@/entities/TodoItem";
import TodoFormLayout from "@/features/todo/ui/TodoFormLayout";

export default function TodoEditable(todoItem: TodoItem): React.ReactElement {
    return (
        <Box mt={2} padding={3} borderRadius={5} bg="white">
            <TodoFormLayout {...todoItem} />
        </Box>
    );
}

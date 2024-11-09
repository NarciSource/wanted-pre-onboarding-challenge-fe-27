import React from "react";

import { Box } from "@chakra-ui/react";

import TodoItem from "@/entities/TodoItem";
import TodoFormLayout from "@/features/todo/ui/TodoFormLayout";

export default function TodoEditable({ id, title, content }: TodoItem): React.ReactElement {
    return (
        <Box mt={2} padding={3} borderRadius={5} bg="white">
            <TodoFormLayout id={id} title={title} content={content} />
        </Box>
    );
}

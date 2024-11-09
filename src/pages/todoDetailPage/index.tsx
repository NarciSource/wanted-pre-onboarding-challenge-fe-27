import { useParams } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import TodoDetail from "./ui/TodoDetail";

export default function TodoDetailPage() {
    const { todoId } = useParams();

    return <Box>{todoId && <TodoDetail todoId={todoId} />}</Box>;
}

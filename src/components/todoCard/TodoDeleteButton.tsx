import { IconButton } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { TodoError } from "@/api/todoApi";
import deleteTodo, { TodoParameters } from "@/api/services/todo/deleteTodo";

export default function TodoDelete({ todoId }: { todoId: string }) {
    const queryClient = useQueryClient();

    const { mutate } = useMutation<boolean, TodoError, TodoParameters>({
        mutationFn: deleteTodo,
        onSuccess: async () => {
            await queryClient.refetchQueries({
                queryKey: ["todoList"],
            });
            await queryClient.refetchQueries({
                queryKey: ["todoView"],
            });
        },
    });

    const onClick = () => {
        mutate({ id: todoId });
    };

    return (
        <IconButton
            onClick={onClick}
            colorPalette="red"
            size="sm"
            bg={{ base: "colorPalette.300", _dark: "colorPalette.400" }}
        >
            <MdDelete />
        </IconButton>
    );
}

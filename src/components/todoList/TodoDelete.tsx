import deleteTodo, { TodoDeleteParameters, TodoError } from "@/api/deleteTodoApi";
import { IconButton } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";

export default function TodoDelete({ todoId }: { todoId: string }) {
    const queryClient = useQueryClient();

    const { mutate } = useMutation<boolean, TodoError, TodoDeleteParameters>({
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
        <IconButton onClick={onClick} colorPalette="blue" rounded="full">
            <MdDelete />
        </IconButton>
    );
}

import deleteTodo, { TodoDeleteParameters, TodoError } from "@/api/deleteTodoApi";
import { IconButton } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";

export default function TodoDelete({ todoId }: { todoId: string }) {
    const { mutate } = useMutation<boolean, TodoError, TodoDeleteParameters>({
        mutationFn: deleteTodo,
        onSuccess: () => {
            console.log("success");
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

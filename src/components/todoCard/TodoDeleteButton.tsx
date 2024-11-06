import { useLocation, useNavigate } from "react-router-dom";

import { IconButton } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toaster } from "@/components/ui/toaster";

import { TodoError } from "@/api/todoApi";
import { TodoParameters } from "@/api/services/todo/deleteTodo";
import removeTodo from "@/services/todo/removeTodo";

export default function TodoDelete({ todoId }: { todoId: string }) {
    const queryClient = useQueryClient();
    const location = useLocation();
    const navigate = useNavigate();

    const { mutate } = useMutation<boolean, TodoError, TodoParameters>({
        mutationFn: () => removeTodo(todoId),
        onSuccess: async () => {
            await queryClient.refetchQueries({
                queryKey: ["todoList"],
            });

            if (location.pathname === `/detail/${todoId}`) {
                navigate("/");
            }
            toaster.create({ description: "삭제 성공", type: "info" });
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

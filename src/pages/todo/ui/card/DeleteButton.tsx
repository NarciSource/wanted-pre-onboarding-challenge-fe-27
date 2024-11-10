import { useLocation, useNavigate } from "react-router-dom";

import { IconButton } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toaster } from "@/widgets/chakra-ui/toaster";

import TodoError from "@/features/todo/model/Error";
import removeTodo from "@/features/todo/services/removeTodo";

export default function TodoDelete({ todoId }: { todoId: string }) {
    const queryClient = useQueryClient();
    const location = useLocation();
    const navigate = useNavigate();

    const { mutate } = useMutation<boolean, TodoError, string>({
        mutationFn: removeTodo,
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
        mutate(todoId);
    };

    return (
        <IconButton
            onClick={onClick}
            colorPalette="red"
            size="sm"
            bg="colorPalette.400"
            _hover={{ bg: "colorPalette.600" }}
        >
            <MdDelete />
        </IconButton>
    );
}

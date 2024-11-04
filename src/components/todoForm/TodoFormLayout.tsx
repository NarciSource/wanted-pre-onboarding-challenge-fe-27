import React from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toaster } from "@/components/ui/toaster";

import { TodoError, TodoResponse } from "@/api/todoApi";
import createTodo from "@/api/services/todo/createTodo";
import updateTodo, { TodoParameters } from "@/api/services/todo/updateTodo";
import TodoForm from "./TodoForm";

export default function TodoLayout({
    id,
    title,
    content,
}: {
    id?: string;
    title?: string;
    content?: string;
}): React.ReactElement {
    // 쿼리 캐시에 접근
    // App.tsx에서 queryClient를 이미 생성했으므로 훅으로 접근
    const queryClient = useQueryClient();

    const { mutate } = useMutation<TodoResponse, TodoError, TodoParameters>({
        mutationFn: id ? updateTodo : createTodo,
        onSuccess: async () => {
            // 쿼리 식별자로 재요청
            await queryClient.refetchQueries({
                queryKey: ["todoList"],
            });
            // 여러 캐시 식별자를 요청
            // queryKey의 배열은 && 임
            await queryClient.refetchQueries({
                queryKey: ["todoView"],
            });

            toaster.create({ description: "Todos 업데이트 성공", type: "info" });
        },
        onError: (error) => {
            console.error("Todo 추가 실패", error);
        },
    });

    const handleSubmit = async (data: TodoParameters) => {
        mutate(data);
    };

    return <TodoForm id={id} title={title} content={content} onSubmit={handleSubmit} />;
}

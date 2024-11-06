import deleteTodo from "@/api/services/todo/deleteTodo";

export default function removeTodo(id: string): Promise<boolean> {
    return deleteTodo({ id });
}

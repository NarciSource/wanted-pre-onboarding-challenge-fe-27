import deleteTodo from "@/api/services/todo/deleteTodo";

export default async function removeTodo(id: string): Promise<boolean> {
    return await deleteTodo({ id });
}

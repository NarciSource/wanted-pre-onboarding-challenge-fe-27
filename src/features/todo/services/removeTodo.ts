import deleteTodo from "../api/deleteTodo";

export default async function removeTodo(id: string): Promise<boolean> {
    return await deleteTodo({ id });
}

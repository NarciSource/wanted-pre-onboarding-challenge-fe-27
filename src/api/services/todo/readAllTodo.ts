import todoApi from "@/api/todoApi";

export default async function readAllTodo() {
    const response = await todoApi.get("/");

    return response.data;
}

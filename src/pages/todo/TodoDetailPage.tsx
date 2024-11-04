import { useParams } from "react-router-dom";
import TodoDetail from "@/components/todoDetail/TodoDetail";

export default function TodoDetailPage() {
    const { todoId } = useParams();

    return <div>{todoId && <TodoDetail todoId={todoId} />}</div>;
}

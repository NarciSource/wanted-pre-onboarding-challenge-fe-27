import { useParams } from "react-router-dom";
import TodoView from "@/components/todoDetail/TodoView";

export default function TodoDetailPage() {
    const { todoId } = useParams();

    return <div>{todoId && <TodoView todoId={todoId} />}</div>;
}

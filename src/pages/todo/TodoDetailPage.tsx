import { useParams } from "react-router-dom";

export default function TodoDetailPage() {
    const { todoId } = useParams();

    return (
        <div>
            <h1>{todoId}</h1>
        </div>
    );
}

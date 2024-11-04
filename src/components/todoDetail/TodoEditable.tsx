import React from "react";

import TodoFormLayout from "../todoForm/TodoFormLayout";
import TodoItem from "@/entities/TodoItem";

export default function TodoEditable({ id, title, content }: TodoItem): React.ReactElement {
    return <TodoFormLayout id={id} title={title} content={content} />;
}

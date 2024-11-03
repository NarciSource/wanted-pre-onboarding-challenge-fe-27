import TodoItem from "./TodoItem";

export default class TodoList {
    items: TodoItem[];

    constructor(items: TodoItem[]) {
        this.items = items;
    }
}

export default class TodoItem {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;

    constructor(title: string, content: string, id: string, createdAt: string, updatedAt: string) {
        this.title = title;
        this.content = content;
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

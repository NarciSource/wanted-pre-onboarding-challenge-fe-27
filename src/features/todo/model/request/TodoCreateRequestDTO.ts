export default interface TodoCreateRequestDTO {
    title: string;
    content: string;
    priority?: "urgent" | "normal" | "low";
}

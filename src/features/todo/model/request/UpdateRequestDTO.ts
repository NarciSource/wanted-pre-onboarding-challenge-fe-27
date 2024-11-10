export default interface TodoUpdateRequestDTO {
    id?: string;
    title: string;
    content: string;
    priority?: "urgent" | "normal" | "low";
}

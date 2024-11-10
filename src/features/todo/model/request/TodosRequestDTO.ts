export default interface TodosRequestDTO {
    params?: {
        priorityFilter?: "urgent" | "normal" | "low";
        keyword?: string;
        sort?: "createdAt" | "updatedAt" | "priority";
        order?: "asc" | "desc";
        countOnly?: boolean;
    };
}

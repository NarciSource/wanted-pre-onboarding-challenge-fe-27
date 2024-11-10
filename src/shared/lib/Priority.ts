enum Priority {
    URGENT = "urgent",
    NORMAL = "normal",
    LOW = "low",
}

export default Priority;

export function getPriority(priority: string): Priority | undefined {
    if (priority) {
        return Priority[priority.toUpperCase() as keyof typeof Priority];
    } else {
        return undefined;
    }
}

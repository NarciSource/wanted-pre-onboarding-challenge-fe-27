export default interface TodoError {
    status: number;
    statusText: string;
    data: {
        details: string;
    };
}

export default interface UserError {
    status: number;
    statusText: string;
    data: {
        details: string;
    };
}

export type ExecutionResult<T> = {
    data?: T;
    error?: string;
    success: boolean;
}
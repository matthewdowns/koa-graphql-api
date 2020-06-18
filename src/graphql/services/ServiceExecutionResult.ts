export type ServiceExecutionResult<T> = {
    data?: T;
    error?: string;
    success: boolean;
}
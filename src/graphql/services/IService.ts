import { Services } from "./Services"
import { ExecutionResult } from './ExecutionResult';

export abstract class IService {
    protected type: Services;

    constructor(type: Services) {
        this.type = type;
    }

    abstract async execute<T = undefined>(...params: any): Promise<ExecutionResult<T>>;
}
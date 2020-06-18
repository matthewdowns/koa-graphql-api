import { Services } from "./Services"
import { ServiceExecutionResult } from './ServiceExecutionResult';

export abstract class IService {
    protected type: Services;

    constructor(type: Services) {
        this.type = type;
    }

    abstract async execute<T = undefined>(...params: any): Promise<ServiceExecutionResult<T>>;
}
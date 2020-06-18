import axios, { AxiosRequestConfig } from 'axios';
import { IService } from './IService';
import { ExecutionResult } from './ExecutionResult';
import { Services } from './Services';

export class ApiService extends IService {
    protected type: Services;

    public host: string;
    private timeout: number;

    /**
     * @param host The URL to the hosted API.
     * @param timeout Time in seconds before a request should timeout.
     */
    constructor(host: string, timeout: number = 15) {
        super(Services.Api);

        this.host = host;
        this.timeout = timeout; 
    }

    async execute<T>(route: string, config?: AxiosRequestConfig): Promise<ExecutionResult<T>> {
        try {
            const url = `${this.host}${route}`;
            const response = await axios(url);
            console.log(response);   
            const responseBody = await response.data as T;
            switch(response.status) {
                case 200:
                    return { success: true, data: responseBody };
                case 401:
                    return { success: false, error: 'Unauthorized' };
                default:
                    return { success: false, error: 'Unknown Error' };
            }
        } catch (err) {
            return { success: false, error: JSON.stringify(err) };
        }
    }
}
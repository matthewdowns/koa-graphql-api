import { IService } from './IService';
import { ServiceExecutionResult } from './ServiceExecutionResult';
import { Services } from './Services';

export class DbService extends IService {
    protected type: Services;

    private host: string;
    private database: string;
    private username: string;
    private password: string;
    private timeout: number;

    /**
     * @param host The URL to the hosted database.
     * @param database The database to connect to.
     * @param timeout Time in seconds before a database connection should timeout.
     */
    constructor(host: string, database: string, username: string, password: string, timeout: number = 15) {
        super(Services.Db);

        this.host = host;
        this.database = database;
        this.username = username;
        this.password = password;
        this.timeout = timeout; 
    }

    async execute<T>(query: string): Promise<ServiceExecutionResult<T>> {
        throw 'Not Implemented';
    }
}
import { Config } from './Config';

const environment = process.env.ENVIRONMENT;
const port = process.env.PORT;
const apiHost = process.env.API_HOST;
const dbHost = process.env.DB_HOST;
const dbDatabase = process.env.DB_DATABASE;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

let config: Config;

if (environment && port) {
    config = {
        environment,
        port: parseInt(port),
        api: { host: apiHost || '' },
        db: {
            host: dbHost || '',
            database: dbDatabase || '',
            username: dbUsername || '',
            password: dbPassword || ''
        }
    }    
} else throw 'Some required environment variables were not initialized.';

export { config };
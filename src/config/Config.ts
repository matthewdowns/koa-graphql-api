export type Config = {
    environment: string;
    port: number;
    api: {
        host: string;
    },
    db: {
        host: string;
        database: string;
        username: string;
        password: string;
    }
}
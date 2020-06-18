import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import bodyParser from 'koa-body';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { config } from '../config';
import { 
    UserResolver 
} from './resolvers';

export async function server() {
    const schema = await buildSchema({
        resolvers: [UserResolver],
        emitSchemaFile: true,
        validate: false
    });

    const server = new ApolloServer({ 
        schema
    });

    const app = new Koa();
    app.use(bodyParser());

    server.applyMiddleware({ 
        app,
        onHealthCheck: async () => {
            throw 'ha';
        }
    });
    
    app.listen({ port: config.port }, () => 
        console.log(`🚀 Server ready and listening at ==> http://localhost:${config.port}${server.graphqlPath}  `));
}
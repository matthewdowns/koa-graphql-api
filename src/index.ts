import { server } from './graphql/server';

server().catch(err => console.log(err));
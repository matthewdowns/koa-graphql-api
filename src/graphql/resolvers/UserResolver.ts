import { Resolver, Query, Mutation, Authorized, FieldResolver, Arg } from 'type-graphql';
import { config } from '../../config';
import { User } from '../entities';
import { ApiService } from '../services';

@Resolver(User)
export class UserResolver {
    private service: ApiService;

    constructor() {
        this.service = new ApiService(config.api.host);
    }

    @Query(() => User)
    async user(@Arg('id') id: number): Promise<User> {
        const result = await this.service.execute<User>(`/users/${id}`);
        if (result.success && result.data) {
            return result.data;
        } else {
            console.error(result.error);
            throw result.error;
        }
    }

    @Query(() => [User])
    async users(@Arg('limit') limit: number): Promise<User[]> {
        const result = await this.service.execute<User[]>(`/users?_limit=${limit}`);
        if (result.success && result.data) {
            return result.data;
        } else {
            console.error(result.error);
            throw result.error;
        }
    }
}
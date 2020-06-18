import { Resolver, Query, Mutation, Authorized, FieldResolver, Arg } from 'type-graphql';
import { User } from '../entities';
import { IService } from '../services';

@Resolver(User)
export class UserResolver {
    private service: IService;

    constructor(service: IService) {
        this.service = service;
    }

    @Query(returns => User)
    async getUser(
        @Arg('id') id: number
    ) {
        const result = await this.service.execute<User>();
        if (result.success && result.data) {
            return result.data;
        } else {
            console.error(result.error);
            throw result.error;
        }
    }
}
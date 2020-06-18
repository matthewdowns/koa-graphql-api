import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType({ description: 'The User model' })
export class User {
    @Field(() => ID)
    id: number;

    @Field()
    username: string;
}
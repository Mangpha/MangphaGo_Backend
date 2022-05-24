import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';

@Resolver((of) => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((_) => String)
  hello(): string {
    return 'hello';
  }

  @Mutation((_) => CreateAccountOutput)
  createAccount(
    @Args() input: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    return this.userService.createAccount(input);
  }
}

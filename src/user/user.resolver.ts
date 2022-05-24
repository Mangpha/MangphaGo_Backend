import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateAccountInput } from './dtos/create-account.dto';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';

@Resolver((of) => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((_) => String)
  hello(): string {
    return 'hello';
  }

  @Mutation((_) => String)
  createAccount(@Args() input: CreateAccountInput): Promise<string> {
    return this.userService.createAccount(input);
  }
}

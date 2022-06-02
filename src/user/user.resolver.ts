import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import {
  DeleteAccountInput,
  DeleteAccountOutput,
} from './dtos/delete.account.dto';
import { GetAccountInput, GetAccountOutput } from './dtos/get-account.dto';
import {
  UpdateAccountInput,
  UpdateAccountOutput,
} from './dtos/update-account.dto';
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
    @Args() userInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    return this.userService.createAccount(userInput);
  }

  @Query((_) => GetAccountOutput)
  getAccountById(@Args() userId: GetAccountInput): Promise<GetAccountOutput> {
    return this.userService.getAccountById(userId);
  }

  @Mutation((_) => UpdateAccountOutput)
  updateAccount(
    @Args() updateInput: UpdateAccountInput,
  ): Promise<UpdateAccountOutput> {
    return this.userService.updateAccount(updateInput);
  }

  @Mutation((_) => DeleteAccountOutput)
  deleteAccount(
    @Args() userId: DeleteAccountInput,
  ): Promise<DeleteAccountOutput> {
    return this.userService.deleteAccount(userId);
  }
}

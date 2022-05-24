import { ArgsType, ObjectType, PickType } from '@nestjs/graphql';
import { UserEntity } from '../entity/user.entity';

@ArgsType()
export class CreateAccountInput extends PickType(
  UserEntity,
  ['username', 'email', 'password'],
  ArgsType,
) {}

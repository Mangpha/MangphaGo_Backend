import { ArgsType, Field, ObjectType, PickType } from '@nestjs/graphql';
import { CommonDto } from 'src/common/common.dto';
import { UserEntity } from '../entity/user.entity';

@ArgsType()
export class CreateAccountInput extends PickType(
  UserEntity,
  ['username', 'email', 'password', 'mobile'],
  ArgsType,
) {}

@ObjectType()
export class CreateAccountOutput extends CommonDto {}

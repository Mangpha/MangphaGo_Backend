import { ArgsType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonDto } from 'src/common/common.dto';
import { UserEntity } from '../entity/user.entity';

@ArgsType()
export class UpdateAccountInput extends PickType(UserEntity, [
  'email',
  'password',
  'username',
  'mobile',
]) {}

@ObjectType()
export class UpdateAccountOutput extends CommonDto {}

import { ArgsType, ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { CommonDto } from 'src/common/common.dto';
import { UserEntity } from '../entity/user.entity';

@ArgsType()
export class UpdateAccountInput extends PartialType(
  PickType(
    UserEntity,
    ['id', 'email', 'mobile', 'password', 'username'],
    ArgsType,
  ),
) {}

@ObjectType()
export class UpdateAccountOutput extends CommonDto {}

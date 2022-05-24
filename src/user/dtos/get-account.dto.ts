import { ArgsType, Field, ObjectType, PickType } from '@nestjs/graphql';
import { CommonDto } from 'src/common/common.dto';
import { UserEntity } from '../entity/user.entity';

@ArgsType()
export class GetAccountInput extends PickType(UserEntity, ['id'], ArgsType) {}

@ObjectType()
export class GetAccountOutput extends CommonDto {
  @Field((type) => UserEntity)
  user?: UserEntity;
}

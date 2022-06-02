import { ArgsType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonDto } from 'src/common/common.dto';
import { UserEntity } from '../entity/user.entity';

@ArgsType()
export class DeleteAccountInput extends PickType(UserEntity, ['id']) {}

@ObjectType()
export class DeleteAccountOutput extends CommonDto {}

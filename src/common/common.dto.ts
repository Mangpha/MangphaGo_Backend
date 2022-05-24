import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommonDto {
  @Field((type) => String)
  status: string;

  @Field((type) => String, { nullable: true })
  message?: string;

  @Field((type) => Date)
  creationDate: Date;
}

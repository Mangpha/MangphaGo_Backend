import { Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsString, Length } from 'class-validator';
import { CommonEntity } from 'src/common/common.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

@ObjectType()
@Entity()
export class UserEntity extends CommonEntity {
  @Field((type) => String)
  @Column()
  @IsString()
  username: string;

  @Field((type) => String)
  @Column()
  @IsEmail()
  email: string;

  @Field((type) => String)
  @Column({ select: false })
  @Length(8)
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashing(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (error) {
        throw new InternalServerErrorException();
      }
    }
  }
}

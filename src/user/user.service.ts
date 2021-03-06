import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly user: Repository<UserEntity>,
  ) {}

  async createAccount({
    username,
    email,
    password,
    mobile,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const findUsername = await this.user.findOne({ username });
      const findEmail = await this.user.findOne({ email });
      if (findUsername || findEmail)
        return {
          status: 'error',
          message: 'User already exists',
          creationDate: new Date(),
        };
      await this.user.save(
        this.user.create({ username, email, password, mobile }),
      );
      return { status: 'ok', creationDate: new Date() };
    } catch (error) {
      return {
        status: 'error',
        message: 'Account creation failed',
        creationDate: new Date(),
      };
    }
  }

  async getAccountById({ id }: GetAccountInput): Promise<GetAccountOutput> {
    try {
      const findUser = await this.user.findOne({ id });
      if (!findUser)
        return {
          status: 'error',
          message: 'User Not Found',
          creationDate: new Date(),
        };
      return { status: 'ok', user: findUser, creationDate: new Date() };
    } catch (error) {
      return {
        status: 'error',
        message: 'User Not Found',
        creationDate: new Date(),
      };
    }
  }

  async updateAccount({
    id,
    email,
    password,
    username,
    mobile,
  }: UpdateAccountInput): Promise<UpdateAccountOutput> {
    try {
      const findUser = await this.user.findOne({ id });
      if (email) findUser.email = email;
      if (password) findUser.password = password;
      if (username) findUser.username = username;
      if (mobile) findUser.mobile = mobile;
      await this.user.save(findUser);
      return {
        status: 'ok',
        creationDate: new Date(),
      };
    } catch (error) {
      return {
        status: 'error',
        message: "Couldn't Update user info",
        creationDate: new Date(),
      };
    }
  }

  async deleteAccount({
    id,
  }: DeleteAccountInput): Promise<DeleteAccountOutput> {
    try {
      await this.user.delete({ id });
      return {
        status: 'ok',
        creationDate: new Date(),
      };
    } catch (error) {
      return {
        status: 'error',
        message: "Couldn't Delete User",
        creationDate: new Date(),
      };
    }
  }
}

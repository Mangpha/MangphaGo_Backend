import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
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
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const findUsername = await this.user.findOne({ username });
      const findEmail = await this.user.findOne({ email });
      if (findUsername || findEmail)
        return { status: 'error', message: 'Username already exists' };
      await this.user.save(this.user.create({ username, email, password }));
      return { status: 'ok' };
    } catch (error) {
      return { status: 'error', message: 'Account creation failed' };
    }
  }

  async getAccount() {
    return;
  }

  async updateAccount() {
    return;
  }

  async deleteAccount() {
    return;
  }
}

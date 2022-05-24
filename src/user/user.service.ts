import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
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
  }: CreateAccountInput): Promise<string> {
    return 'a';
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

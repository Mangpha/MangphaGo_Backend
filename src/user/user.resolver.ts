import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query((_) => String)
  Hello(): string {
    return 'Hello World';
  }
}

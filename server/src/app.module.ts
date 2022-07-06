import { Module } from '@nestjs/common';
import { ApiController } from './api-controller/api.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [ApiController, UsersController],
  providers: [UsersService],
})
export class AppModule {}

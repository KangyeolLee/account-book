import { Module } from '@nestjs/common';
import { ApiController } from './api-controller/api.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { EmailService } from './email/email.service';

@Module({
  imports: [],
  controllers: [ApiController, UsersController],
  providers: [UsersService, EmailService],
})
export class AppModule {}

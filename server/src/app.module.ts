import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';

import { UsersModule } from './users/users.module';
import validationEmailConfig from './utils/validatationEmailConfig';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
      validationSchema: validationEmailConfig,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://<username>:<password>@cluster-nestjs-crud.03vp6.mongodb.net/test'),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

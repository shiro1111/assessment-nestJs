import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserService } from './services/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'User',
      schema: UserSchema,
      collection: 'User'
    }]),
    MongooseModule.forRoot("mongodb+srv://root:Password@cluster0.d9gi9.mongodb.net/EtiqaDatabase?retryWrites=true&w=majority" , 
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })],
  controllers: [
    AppController , 
    UserController
  ],
  providers: [
    AppService , 
    UserService
  ],
})
export class AppModule {}

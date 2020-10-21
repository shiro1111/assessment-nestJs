import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/model/user.model';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async getAll() {
        return await this.userModel.find();
    }

    async createUser(user) {
        const newUser = new this.userModel(user);
        try {
              return await newUser.save();
        } catch (error) {
            throw new HttpException(error.message , HttpStatus.BAD_REQUEST);
        }
    }

    async updateUser(user) {
        try {
            return await this.userModel.updateOne(user);
        } catch (error) {
            throw new HttpException('Failed to update user' , HttpStatus.BAD_REQUEST);

        }
    }
   
    async deleteUser(id) {
        try {
            return await this.userModel.deleteOne({_id : id});
            
        } catch (error) {
            throw new HttpException('Failed to delete user' , HttpStatus.BAD_REQUEST);
            
        }
    }
}

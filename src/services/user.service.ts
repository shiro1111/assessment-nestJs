import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/model/user.model';
import { throwError } from 'rxjs';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async getAll() {
        return await this.userModel.find();
    }

    async getUser(id) {
        try {
            return await this.userModel.findOne({_id: id});
           
        } catch (error) {
            throw new HttpException('User not found' , HttpStatus.BAD_REQUEST)
        }
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
             await this.userModel.updateOne(user);
             return 'User successful updated'
        } catch (error) {
            throw new HttpException('Failed to update user' , HttpStatus.BAD_REQUEST);

        }
    }
   
    async deleteUser(id) {
        try {
             await this.userModel.deleteOne({_id : id});
             return 'user successful deleted'
            
        } catch (error) {
            throw new HttpException('Failed to delete user' , HttpStatus.BAD_REQUEST);
            
        }
    }
}

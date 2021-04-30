import { UserDto } from './dtos/user.dto';
import { UserEntity } from './database/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './interfaces/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
        ) {

    }

    async create(user: User): Promise<UserEntity> {
        return await this.userRepository.save(user)
    }

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find()
    }

    async findById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne(id);
    }
    
    async update(user: UserDto): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }
}

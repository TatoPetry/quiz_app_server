import { UsersService } from './users.service';
import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Query, Res } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserEntity } from './database/user.entity';
import express, {Request, Response} from 'express';
import { Put } from '@nestjs/common';
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    async index(): Promise<UserEntity[]> {
        return await this.usersService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe, ) id: number, @Res() res: Response): Promise<UserEntity> {

        return this.usersService.findById(id)

    }

    @Post()
    async create(@Body() user: UserDto,  @Res() res: Response) {
        // let return = await this.usersService.create(user)
        let resp = await this.usersService.create(user);
        if (!resp) {
            res.status(HttpStatus.UNPROCESSABLE_ENTITY).send('Erro no objeto de cadastro')
        } else {
            delete resp.password
        }
        res.status(HttpStatus.CREATED).json(resp);

    }

    
    @Put(':id')
    update(@Param('id') id: number, @Body() user: UserDto) {
      return this.usersService.update(user);
    }
  
    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //   return this.usersService.remove(+id);
    // }


}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({      
      type: 'mysql',
      host: 'localhost',
      database: 'server-db',
      username: 'tato',
      password: '1234',      
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    })
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

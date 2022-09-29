import { Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { RentController } from './rent.controller';
import { Rent } from './entities/rent.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/car/entities/car.entity';
import { User } from 'src/users/entities/user.entity';
import { CarService } from 'src/car/car.service';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rent, User, Car])],
  controllers: [RentController],
  providers: [RentService, CarService, UsersService],
})
export class RentModule {}

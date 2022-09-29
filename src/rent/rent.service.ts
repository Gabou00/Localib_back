import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/car/entities/car.entity';
import { Rent } from 'src/rent/entities/rent.entity';
import { Repository } from 'typeorm';
import { CreateRentDto } from './dto/create-Rent.dto';
import { UpdateRentDto } from './dto/update-Rent.dto';
import { CarService } from 'src/car/car.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class RentService {
  constructor(
    @InjectRepository(Rent)
    private RentRepository: Repository<Rent>,
    private readonly carService: CarService,
    private readonly useService: UsersService,
  ) {}

  async create(createRentDto: CreateRentDto) {
    const car: Car = await this.carService.findOne(createRentDto.carId);
    const user: User = await this.useService.findOne(createRentDto.userId);
    const newRent = new Rent();
    newRent.debut_rent = createRentDto.debut_rent;
    newRent.fin_rent = createRentDto.fin_rent;
    newRent.prix_total = createRentDto.prix_total;
    newRent.car = car;
    newRent.user = user;
    return this.RentRepository.save(newRent);
  }

  findAll() {
    return this.RentRepository.find();
  }

  findOne(id: number): Promise<Rent> {
    return this.RentRepository.findOneBy({ id });
  }

  update(id: number, updateRentDto: UpdateRentDto) {
    return this.RentRepository.update({ id }, { ...updateRentDto });
  }

  remove(id: number) {
    return this.RentRepository.delete(id);
  }
}

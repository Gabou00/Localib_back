import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from 'src/car/entities/car.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Rent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  debut_rent: Date;

  @Column()
  fin_rent: Date;

  @Column()
  prix_total: number;

  @ManyToOne(() => Car, (car) => car.rent)
  car: Car;

  @ManyToOne(() => User, (user) => user.rent)
  user: User;
}

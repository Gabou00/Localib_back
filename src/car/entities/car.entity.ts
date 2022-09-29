import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rent } from 'src/rent/entities/rent.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marque: string;

  @Column()
  modele: string;

  @Column()
  immatriculation: string;

  @Column()
  etat_du_vehicule: string;

  @Column()
  price: number;

  @Column()
  disponibilite: boolean;

  @Column()
  type_vehicule: string;

  @OneToMany(() => Rent, (rent) => rent.car)
  rent: Rent[];
}

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

// {
//   "marque": "Lexus",
//   "modele": "LF-30",
//   "immatriculation": "25-CV-56",
//   "etat_du_vehicule": "A",
//   "price": 80,
//   "disponibilite": true,
//   "type_vehicule": "voiture"
// }
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  rent: any;
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Rent } from 'src/rent/entities/rent.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  prenom: string;

  @Column()
  nom: string;

  @Column()
  date_naissance: Date;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @OneToMany(() => Rent, (rent) => rent.user)
  rent: Rent[];
}

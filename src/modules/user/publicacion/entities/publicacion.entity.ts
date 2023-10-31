import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity()
export class Distribuidor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  telefono: number;

  @Column()
  direccion: string;

  @OneToMany(() => Cliente, cliente => cliente.distribuidor)
  clientes: Cliente[];
}

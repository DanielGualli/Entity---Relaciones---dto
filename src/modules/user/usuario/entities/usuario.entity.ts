import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Distribuidor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  telefono: number

  @OneToMany(() => Usuario, usuario => usuario.publicacion)
  usuario: Usuario[];
}
export { Usuario };


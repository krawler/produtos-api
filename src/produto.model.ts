import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produtos')
export default class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  nome: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;
}

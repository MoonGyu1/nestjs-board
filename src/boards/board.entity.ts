import { BaseEntity, ManyToOne } from 'typeorm';
import { BoardStatus } from './board.status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/auth/user.entity';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  @ManyToOne(() => User, (user) => user.boards, { eager: false })
  user: User;
}
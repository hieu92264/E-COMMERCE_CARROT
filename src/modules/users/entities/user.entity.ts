import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'email',
    unique: true,
  })
  email: string;

  @Column({
    name: 'password',
  })
  password: string;

  @Column({
    name: 'full_name',
  })
  full_name: string;

  @Column({
    name: 'phone',
  })
  phone: string;

  @Column({
    name: 'address',
    nullable: true,
  })
  address: string;

  @CreateDateColumn({
    nullable: true,
  })
  created_at;

  @UpdateDateColumn({
    nullable: true,
  })
  updated_at;

  @DeleteDateColumn({
    nullable: true,
  })
  deleted_at;
}

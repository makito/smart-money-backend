import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wallets')
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '', type: 'varchar', length: 25, nullable: false })
  name: string;

  @Column({ default: 0.0, type: 'float', nullable: false, precision: 10, scale: 2 })
  amount: number;
}

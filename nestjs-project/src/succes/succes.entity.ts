import { BaseEntity, Column, Entity, Timestamp } from 'typeorm';

@Entity('succes')
export class succes extends BaseEntity {
 @PrimaryGeneratedColumn()
id: string;
 @Column()
 timeTakenMs: Timestamp;
}
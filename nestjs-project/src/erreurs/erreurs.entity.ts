import { BaseEntity, Column, Entity } from 'typeorm';



@Entity('erreurs')
export class erreurs extends BaseEntity {
 @PrimaryGeneratedColumn()
id: string;
 @CreateDateColumn()
created_at: string;
}
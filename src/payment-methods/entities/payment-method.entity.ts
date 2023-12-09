import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class PaymentMethod {
    @PrimaryGeneratedColumn()
    PaymentMethodId: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'UserId' })
    user: User;

    @Column()
    details: string;
}

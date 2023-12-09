import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Gallery {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String, nullable: false })
    name: string;

    @Column({ type: String, nullable: false })
    url: string;

    @ManyToOne(() => User, (owner) => owner.galleries)
    @JoinColumn({ name: 'ownerId' })
    owner: User;

    @Column({ type: 'date', nullable: true })
    purchaseDate: Date;
}

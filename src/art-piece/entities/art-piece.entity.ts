import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class ArtPiece {
    @PrimaryGeneratedColumn()
    ArtPieceId: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    dimensions: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'ownerId' })
    owner: User;

    @Column()
    status: string;
}

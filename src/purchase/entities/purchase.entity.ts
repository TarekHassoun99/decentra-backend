import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ArtPiece } from '../../art-piece/entities/art-piece.entity';
import { Gallery } from '../../galleries/entities/gallery.entity';
import { PaymentMethod } from '../../payment-methods/entities/payment-method.entity';

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    PurchaseId: number;

    @Column('decimal')
    Price: number;

    @Column()
    Status: string;

    @Column('timestamp')
    purchaseDate: Date;

    @ManyToOne(() => ArtPiece)
    @JoinColumn({ name: 'artPieceId' })
    artPiece: ArtPiece;

    @ManyToOne(() => Gallery)
    @JoinColumn({ name: 'galleryId' })
    gallery: Gallery;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'BuyerUserId' })
    buyerUser: User;

    @ManyToOne(() => PaymentMethod)
    @JoinColumn({ name: 'PaymentMethodId' })
    paymentMethod: PaymentMethod;
}

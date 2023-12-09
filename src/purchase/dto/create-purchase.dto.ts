import { IsString, IsNotEmpty, IsNumber, IsDecimal } from "class-validator";

export class CreatePurchaseDto {
    @IsNumber()
    @IsNotEmpty()
    Price: number;

    @IsString()
    @IsNotEmpty()
    Status: string;

    @IsNotEmpty()
    purchaseDate: Date;

    @IsNumber()
    @IsNotEmpty()
    artPieceId: number;

    @IsNumber()
    @IsNotEmpty()
    galleryId: number;

    @IsNumber()
    @IsNotEmpty()
    BuyerUserId: number;

    @IsNumber()
    @IsNotEmpty()
    PaymentMethodId: number;
}

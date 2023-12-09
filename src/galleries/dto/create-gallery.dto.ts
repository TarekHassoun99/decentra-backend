import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateGalleryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    url: string;

    @IsNumber()
    ownerId: number;

    purchaseDate?: Date;
}

import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateArtPieceDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    url: string;

    @IsString()
    @IsNotEmpty()
    dimensions: string;

    @IsNumber()
    @IsNotEmpty()
    ownerId: number;

    @IsString()
    @IsNotEmpty()
    status: string;
}

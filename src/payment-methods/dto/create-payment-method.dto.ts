import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreatePaymentMethodDto {
    @IsNumber()
    @IsNotEmpty()
    UserId: number;

    @IsString()
    @IsNotEmpty()
    details: string;
}

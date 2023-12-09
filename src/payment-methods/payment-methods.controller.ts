import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpStatus,
    HttpCode,
} from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { ApiTags } from '@nestjs/swagger';
import { NullableType } from '../utils/types/nullable.type';
import { PaymentMethod } from './entities/payment-method.entity';

@ApiTags('PaymentMethods')
@Controller({
    path: 'payment-methods',
    version: '1',
})
export class PaymentMethodsController {
    constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
        return this.paymentMethodsService.create(createPaymentMethodDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.paymentMethodsService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: string): Promise<NullableType<PaymentMethod>> {
        return this.paymentMethodsService.findOne({ PaymentMethodId: +id });
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id: string, @Body() body: any) {
        return this.paymentMethodsService.update(+id, body as UpdatePaymentMethodDto);
    }


    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.paymentMethodsService.remove(+id);
    }
}

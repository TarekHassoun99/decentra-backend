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
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ApiTags } from '@nestjs/swagger';
import { NullableType } from '../utils/types/nullable.type';
import { Purchase } from './entities/purchase.entity';

@ApiTags('Purchases')
@Controller({
    path: 'purchases',
    version: '1',
})
export class PurchaseController {
    constructor(private readonly purchasesService: PurchaseService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createPurchaseDto: CreatePurchaseDto) {
        return this.purchasesService.create(createPurchaseDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.purchasesService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: string): Promise<NullableType<Purchase>> {
        return this.purchasesService.findOne({ PurchaseId: +id });
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id: string, @Body() updatePurchaseDto: UpdatePurchaseDto) {
        return this.purchasesService.update(+id, updatePurchaseDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.purchasesService.remove(+id);
    }
}

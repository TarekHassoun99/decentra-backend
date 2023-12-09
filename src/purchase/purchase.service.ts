import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase } from './entities/purchase.entity';
import { EntityCondition } from '../utils/types/entity-condition.type';
import { NullableType } from '../utils/types/nullable.type';

@Injectable()
export class PurchaseService {
    constructor(
        @InjectRepository(Purchase)
        private purchaseRepository: Repository<Purchase>,
    ) {}

    create(createPurchaseDto: CreatePurchaseDto): Promise<Purchase> {
        return this.purchaseRepository.save(
            this.purchaseRepository.create(createPurchaseDto),
        );
    }

    findAll(): Promise<Purchase[]> {
        return this.purchaseRepository.find();
    }

    findOne(fields: EntityCondition<Purchase>): Promise<NullableType<Purchase>> {
        return this.purchaseRepository.findOne({
            where: fields,
        });
    }

    update(PurchaseId: number, updatePurchaseDto: UpdatePurchaseDto): Promise<Purchase> {
        const updateData: any = { ...updatePurchaseDto };

        // ... (any other necessary transformations on updateData)

        return this.purchaseRepository.save({ PurchaseId, ...updateData });
    }


    remove(id: number): Promise<void> {
        return this.purchaseRepository.delete(id).then(() => {});
    }
}

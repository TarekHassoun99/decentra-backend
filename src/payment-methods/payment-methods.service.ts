import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { PaymentMethod } from './entities/payment-method.entity';
import { EntityCondition } from '../utils/types/entity-condition.type';
import { NullableType } from '../utils/types/nullable.type';

@Injectable()
export class PaymentMethodsService {
    constructor(
        @InjectRepository(PaymentMethod)
        private paymentMethodRepository: Repository<PaymentMethod>,
    ) {}

    create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethod> {
        return this.paymentMethodRepository.save(
            this.paymentMethodRepository.create(createPaymentMethodDto),
        );
    }

    findAll(): Promise<PaymentMethod[]> {
        return this.paymentMethodRepository.find();
    }

    findOne(fields: EntityCondition<PaymentMethod>): Promise<NullableType<PaymentMethod>> {
        return this.paymentMethodRepository.findOne({
            where: fields,
        });
    }

    update(PaymentMethodId: number, updatePaymentMethodDto: UpdatePaymentMethodDto): Promise<PaymentMethod> {
        return this.paymentMethodRepository.save(
            this.paymentMethodRepository.create({
                PaymentMethodId,
                ...updatePaymentMethodDto,
            }),
        );
    }

    remove(id: number): Promise<void> {
        return this.paymentMethodRepository.delete(id).then(() => {});
    }
}

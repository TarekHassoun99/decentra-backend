import {BadRequestException, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateArtPieceDto } from './dto/create-art-piece.dto';
import { UpdateArtPieceDto } from './dto/update-art-piece.dto';
import { ArtPiece } from './entities/art-piece.entity';
import { EntityCondition } from '../utils/types/entity-condition.type';
import { NullableType } from '../utils/types/nullable.type';

@Injectable()
export class ArtPieceService {
    constructor(
        @InjectRepository(ArtPiece)
        private artPieceRepository: Repository<ArtPiece>,
    ) {}

    create(createArtPieceDto: CreateArtPieceDto): Promise<ArtPiece> {
        const artPiece = this.artPieceRepository.create({
            ...createArtPieceDto,
            owner: { id: createArtPieceDto.ownerId },
        });

        return this.artPieceRepository.save(artPiece);
    }

    findAll(): Promise<ArtPiece[]> {
        return this.artPieceRepository.find();
    }

    findOne(fields: EntityCondition<ArtPiece>): Promise<NullableType<ArtPiece>> {
        return this.artPieceRepository.findOne({
            where: fields,
        });
    }

    update(id: number, updateArtPieceDto: UpdateArtPieceDto): Promise<ArtPiece> {
        const cleanUpdateDto = Object.fromEntries(
            Object.entries(updateArtPieceDto).filter(([_, v]) => v !== undefined)
        );

        console.log('DTO received:', updateArtPieceDto);
        console.log('ArtPiece found:', cleanUpdateDto);

        if (Object.keys(cleanUpdateDto).length === 0) {
            throw new BadRequestException('No properties provided to update the art piece');
        }


        return this.artPieceRepository.save({ ArtPieceId: id, ...cleanUpdateDto });
    }


    remove(id: number): Promise<void> {
        return this.artPieceRepository.delete(id).then(() => {});
    }
}

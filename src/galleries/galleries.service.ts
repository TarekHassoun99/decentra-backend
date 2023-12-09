import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {DeepPartial, Repository} from 'typeorm';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { Gallery } from './entities/gallery.entity';
import {EntityCondition} from "../utils/types/entity-condition.type";
import {User} from "../users/entities/user.entity";
import {NullableType} from "../utils/types/nullable.type";

@Injectable()
export class GalleriesService {
    constructor(
        @InjectRepository(Gallery)
        private galleryRepository: Repository<Gallery>,
    ) {}

    create(createGalleryDto: CreateGalleryDto): Promise<Gallery> {
        const gallery = this.galleryRepository.create({
            ...createGalleryDto,
            owner: { id: createGalleryDto.ownerId }
        });

        return this.galleryRepository.save(gallery);
    }


    findAll(): Promise<Gallery[]> {
        return this.galleryRepository.find();
    }

    findOne(fields: EntityCondition<Gallery>): Promise<NullableType<Gallery>> {
        return this.galleryRepository.findOne({
            where: fields,
        });
    }



    update(id: number, updateGalleryDto: UpdateGalleryDto): Promise<(DeepPartial<Gallery> & Gallery)[]> {
      const updateData: any = { ...updateGalleryDto };

      if (updateGalleryDto.ownerId) {
        updateData.owner = { id: updateGalleryDto.ownerId };
        delete updateData.ownerId;
      }

      return this.galleryRepository.save({ id, ...updateData });
    }

    remove(galleryId: number): Promise<void> {
        return this.galleryRepository.delete(galleryId).then(() => {});
    }
}

import { Module } from '@nestjs/common';
import { GalleriesService } from './galleries.service';
import { GalleriesController } from './galleries.controller';
import { Gallery } from "./entities/gallery.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Gallery])], // Assuming Gallery is the Entity
  providers: [GalleriesService],
  controllers: [GalleriesController],
})
export class GalleriesModule {}


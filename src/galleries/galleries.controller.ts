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
import { GalleriesService } from './galleries.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { ApiTags } from '@nestjs/swagger';
import {NullableType} from "../utils/types/nullable.type";
import {User} from "../users/entities/user.entity";
import {Gallery} from "./entities/gallery.entity";

@ApiTags('Galleries')
@Controller({
    path: 'galleries',
    version: '1',
})
export class GalleriesController {
    constructor(private readonly galleryService: GalleriesService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createGalleryDto: CreateGalleryDto) {
        return this.galleryService.create(createGalleryDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.galleryService.findAll();
    }


    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: string): Promise<NullableType<Gallery>> {
        return this.galleryService.findOne({ id: +id });
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id: string, @Body() body: any) {
        return this.galleryService.update(+id, body as UpdateGalleryDto);
    }


    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.galleryService.remove(+id);
    }
}

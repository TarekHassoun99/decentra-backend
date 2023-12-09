import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpStatus,
    HttpCode, Req,
} from '@nestjs/common';
import { ArtPieceService } from './art-piece.service';
import { CreateArtPieceDto } from './dto/create-art-piece.dto';
import { UpdateArtPieceDto } from './dto/update-art-piece.dto';
import { ApiTags } from '@nestjs/swagger';
import { NullableType } from '../utils/types/nullable.type';
import { ArtPiece } from './entities/art-piece.entity';
import {Gallery} from "../galleries/entities/gallery.entity";

@ApiTags('ArtPieces')
@Controller({
    path: 'art-pieces',
    version: '1',
})
export class ArtPieceController {
    constructor(private readonly artPiecesService: ArtPieceService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createArtPieceDto: CreateArtPieceDto) {
        return this.artPiecesService.create(createArtPieceDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.artPiecesService.findAll();
    }

    @Get(':ArtPieceId')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('ArtPieceId') ArtPieceId: string): Promise<NullableType<ArtPiece>> {
        return this.artPiecesService.findOne({ ArtPieceId: +ArtPieceId });
    }




    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id: string, @Body() body: any) {
        console.log('Raw request body:', body);
        return this.artPiecesService.update(+id, body as UpdateArtPieceDto);
    }


    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.artPiecesService.remove(+id);
    }
}

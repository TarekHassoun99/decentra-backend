import { Module } from '@nestjs/common';
import { ArtPieceService } from './art-piece.service';
import { ArtPieceController } from './art-piece.controller';
import { ArtPiece } from './entities/art-piece.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArtPiece])],
  providers: [ArtPieceService],
  controllers: [ArtPieceController],
})
export class ArtPieceModule {}

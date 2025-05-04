import { Module } from '@nestjs/common';
import { ImagenService } from './imagen.service';
import { ImagenResolver } from './imagen.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ImagenResolver, ImagenService, PrismaService],
})
export class ImagenModule {}

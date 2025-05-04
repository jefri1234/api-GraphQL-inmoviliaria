import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'
import { CreateImagenInput } from './dto/create-imagen.input';
import { UpdateImagenInput } from './dto/update-imagen.input';

@Injectable()
export class ImagenService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateImagenInput) {
    return this.prisma.imagen.create({
      data,
    });
  }

  findAll() {
    return this.prisma.imagen.findMany();
  }

  findOne(id: number) {
    return this.prisma.imagen.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateImagenInput) {
    return this.prisma.imagen.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.imagen.delete({
      where: { id },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropiedadInput } from './dto/create-propiedad.input';
import { UpdatePropiedadInput } from './dto/update-propiedad.input';

@Injectable()
export class PropiedadService {
  constructor(private prisma: PrismaService) {}

  async create(createPropiedadInput: CreatePropiedadInput) {
    const { userId, ...data } = createPropiedadInput;
    return this.prisma.propiedad.create({
      data: {
        ...data,
        user: {
          connect: { id: userId },
        },   
      },
      include: {
        user: true, // 👈 esto es clave para que el campo "user" se resuelva
      },
    });
  }

  findAll() {
    return this.prisma.propiedad.findMany();
  }

  findOne(id: number) {
    return this.prisma.propiedad.findUnique({ where: { id } });
  }

  update(id: number, updatePropiedadInput: UpdatePropiedadInput) {
    return this.prisma.propiedad.update({
      where: { id },
      data: updatePropiedadInput,
    });
  }

  remove(id: number) {
    return this.prisma.propiedad.delete({ where: { id } });
  }
}

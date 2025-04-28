import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Crear usuario
  createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  // Obtener todos
  users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Obtener uno
  user(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // Actualizar
  updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  // Eliminar
  deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
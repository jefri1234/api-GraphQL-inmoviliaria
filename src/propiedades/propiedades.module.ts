import { Module } from '@nestjs/common';
import { PropiedadService } from './propiedades.service';
import { PropiedadResolver } from './propiedades.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersModule} from 'src/users/users.module';
import { ImagenModule } from 'src/imagen/imagen.module';

@Module({
  imports: [UsersModule, ImagenModule],
  providers: [PropiedadService, PropiedadResolver, PrismaService],
})
export class PropiedadModule {}

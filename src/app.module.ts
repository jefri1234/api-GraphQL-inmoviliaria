import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PropiedadModule } from './propiedades/propiedades.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagenModule } from './imagen/imagen.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),

    PrismaModule,
    UsersModule,
    PropiedadModule,
    ImagenModule,
    PaymentsModule,

  ],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {}

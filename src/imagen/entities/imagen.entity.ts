// src/imagen/entities/imagen.entity.ts

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Propiedad } from './../../propiedades/entities/propiedad.entity';

@ObjectType()

export class Imagen {
  @Field(() => Int)
  id: number;

  @Field()
  url: string;

  @Field(() => Int)
  propiedadId: number;

  @Field(() => Propiedad)
  propiedad: Propiedad;
}

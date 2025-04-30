// src/user/entities/user.entity.ts

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Propiedad } from "./../../propiedades/entities/propiedad.entity";

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  telefono?: string;

  @Field({ nullable: true })
  fecha?: Date;

  @Field({ nullable: true })
  rol?: string;

  @Field(() => [Propiedad])
  propiedades: Propiedad[];

  @Field({ nullable: true })
  fechaNacimiento?: Date;
}

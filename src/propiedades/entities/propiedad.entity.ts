import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Imagen } from 'src/imagen/entities/imagen.entity';
import { TipoPropiedad } from '../enums/tipo-propiedad.enum';
import { EstadoPropiedad } from '../enums/estado-propiedad.enum';

@ObjectType()
export class Propiedad {
  @Field(() => Int)
  id: number;

  @Field()
  descripcion: string;

  @Field(() => Float)
  precio: number;

  @Field(() => Float, { nullable: true })
  area?: number;

  @Field(() => Int, { nullable: true })
  habitaciones?: number;

  @Field(() => Int, { nullable: true })
  banos?: number;

  @Field(() => Int, { nullable: true })
  garage?: number;

  @Field(() => Float, { nullable: true })
  longitud?: number;

  @Field(() => TipoPropiedad)
  tipoPropiedad: TipoPropiedad;

  @Field(() => EstadoPropiedad)
  estadoPropiedad: EstadoPropiedad;

  @Field({ nullable: true })
  direccion?: string;

  @Field({ nullable: true })
  pais?: string;

  @Field({ nullable: true })
  provincia?: string;

  @Field({ nullable: true })
  distrito?: string;

  @Field(() => Int)
  userId: number;

  @Field(() => User)
  user: User;

  @Field(() => [Imagen], { nullable: 'itemsAndList' })
  imagenes?: Imagen[];

  @Field()
  imgenPrincipla: string;

  @Field()
  createdAt: Date;
}

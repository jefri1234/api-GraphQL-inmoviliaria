import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { TipoPropiedad } from '../enums/tipo-propiedad.enum';
import { EstadoPropiedad } from '../enums/estado-propiedad.enum';

@InputType()
export class CreatePropiedadInput {
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
  ciudad?: string;

  @Field({ nullable: true })
  estado?: string;

  @Field({ nullable: true })
  pais?: string;

  @Field(() => Int)
  userId: number;

  @Field()
  imgenPrincipla: string;
}

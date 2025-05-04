// payment.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';


// Entities → Tipos de salida (@ObjectType)
// DTOs → Tipos de entrada (@InputType)

// Resolvers → Controladores de GraphQL (@Resolver)
// En NestJS, los decoradores de GraphQL se utilizan para definir la estructura de los tipos de datos que se envían y reciben a través de la API GraphQL.
// Estos decoradores permiten a NestJS generar automáticamente el esquema GraphQL basado en las clases y sus propiedades.

@ObjectType()
export class Payment {
  
  @Field(() => Int)
  id: number;

  @Field()
  amount: number;

  @Field()
  description: string;

  // agrega más campos según tu modelo
}

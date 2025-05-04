import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateImagenInput {

  @Field()
  url: string;

  @Field(() => Int)
  propiedadId: number;
  
}

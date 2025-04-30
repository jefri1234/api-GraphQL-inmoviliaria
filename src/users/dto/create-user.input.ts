


import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {


  @Field()
  name: string;

  @Field()
  image: string;
  
  @Field()
  telefono: string;
  
  @Field()
  fecha: Date;

  @Field()
  rol:string;

  @Field()
  fechaNaciemiento: Date;
  
}
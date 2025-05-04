import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateImagenInput } from './create-imagen.input';

@InputType()
export class UpdateImagenInput extends PartialType(CreateImagenInput) {

  @Field(() => Int)
  id: number;
  
}

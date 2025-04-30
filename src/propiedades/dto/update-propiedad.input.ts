import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreatePropiedadInput } from './create-propiedad.input';

@InputType()
export class UpdatePropiedadInput extends PartialType(CreatePropiedadInput) {
  @Field(() => Int)
  id: number;
}

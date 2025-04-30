// create-payment.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePaymentInput {
  @Field()
  amount: number;

  @Field()
  description: string;
}

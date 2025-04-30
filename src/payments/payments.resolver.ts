import { Resolver, Query, Mutation, Args,Int } from '@nestjs/graphql';
import { PaymentsService } from './payments.service';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { Payment } from './entities/payment.entity';


//En NestJS con GraphQL code-first, el esquema se construye automáticamente a partir de tus:
//Entities (que representan la estructura de tus datos en la base de datos)
//DTOs (que definen la forma de los datos que se envían y reciben en las solicitudes GraphQL)
//Resolvers (que manejan las consultas y mutaciones GraphQL)
//Por lo tanto, no necesitas definir un esquema GraphQL manualmente. NestJS generará el esquema automáticamente a partir de tus decoradores y clases.

@Resolver(() => Payment)
export class PaymentsResolver {
  //Inyectamos el servicio de pagos en el resolver para poder usarlo en las consultas y mutaciones
  
  constructor(private readonly paymentsService: PaymentsService) {}

  
  //------------QUERIES--------------
  @Query(() => [Payment],{name:'payments'})
  findAll() {
    return this.paymentsService.findAll();
  }

  @Query(() => Payment,{name:'payment'})
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paymentsService.findOne(id);
  }

  //-----------------MUTACIONES-------------- 
  @Mutation(() => Payment)
  createPayment(@Args('createPaymentInput') createPaymentInput: CreatePaymentInput) {
    return this.paymentsService.create(createPaymentInput);
  }

  @Mutation(() => Payment)
  updatePayment(@Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput) {
    return this.paymentsService.update(updatePaymentInput.id, updatePaymentInput);
  }

  @Mutation(() => Payment)
  removePayment(@Args('id', { type: () => Int }) id: number){
    return this.paymentsService.remove(id);
  }
}
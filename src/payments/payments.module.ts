import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsResolver } from './payments.resolver';

@Module({
  //aqui estoy importando el servicio y el resolver para que se puedan usar en el modulo 
  providers: [PaymentsResolver, PaymentsService],
})
export class PaymentsModule {}

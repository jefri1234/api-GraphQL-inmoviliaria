import { Injectable } from '@nestjs/common';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';

@Injectable()
export class PaymentsService {
  
  create(createPaymentInput: CreatePaymentInput) {
    return 'This action adds a new payment';
  }

  findAll() {
    return [
      {
        id: 1,
        amount: 150.75,
        description: 'Primer pago de alquiler',
      },
      {
        id: 2,
        amount: 200.00,
        description: 'Segundo pago de alquiler',
      },
    ];
  }

  findOne(id: number) {
    const payments = [
      {
        id: 1,
        amount: 150.75,
        description: 'Primer pago de alquiler',
      },
      {
        id: 2,
        amount: 200.00,
        description: 'Segundo pago de alquiler',
      },
    ];
    return payments.find(payment => payment.id === id);
  }

  update(id: number, updatePaymentInput: UpdatePaymentInput) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}

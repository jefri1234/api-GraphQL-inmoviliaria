import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  // Importar el servicio y el resolver esto para que el modulo pueda usarlo
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}

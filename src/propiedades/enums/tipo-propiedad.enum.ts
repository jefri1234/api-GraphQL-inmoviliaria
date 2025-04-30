// src/propiedad/enums/tipo-propiedad.enum.ts
import { registerEnumType } from '@nestjs/graphql';

export enum TipoPropiedad {
  CASA = 'CASA',
  TERRENO = 'TERRENO',
  DEPARTAMENTO = 'DEPARTAMENTO',
}

registerEnumType(TipoPropiedad, {
  name: 'TipoPropiedad',
});

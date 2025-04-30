// src/propiedad/enums/estado-propiedad.enum.ts
import { registerEnumType } from '@nestjs/graphql';

export enum EstadoPropiedad {
  VENTA = 'VENTA',
  ALQUILER = 'ALQUILER',
}

registerEnumType(EstadoPropiedad, {
  name: 'EstadoPropiedad',
});

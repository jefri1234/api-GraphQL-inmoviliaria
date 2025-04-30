// src/propiedad/enums/estado-propiedad.enum.ts
import { registerEnumType } from '@nestjs/graphql';

export enum EstadoPropiedad {
  VENTA = 'VENTA',
  ALQUILER = 'ALQUILER',
  DISPONIBLE= 'DISPONIBLE',
  RESERVADO = 'RESERVADO'
}

registerEnumType(EstadoPropiedad, {
  name: 'EstadoPropiedad',
});

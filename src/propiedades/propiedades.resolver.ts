import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PropiedadService } from './propiedades.service';

import { Propiedad } from './entities/propiedad.entity';
import { CreatePropiedadInput } from './dto/create-propiedad.input';
import { UpdatePropiedadInput } from './dto/update-propiedad.input';

import { Imagen } from '../imagen/entities/imagen.entity';

@Resolver(() => Propiedad)
export class PropiedadResolver {

  constructor(private readonly propiedadService: PropiedadService) {}

  @Mutation(() => Propiedad)
  createPropiedad(@Args('createPropiedadInput') createPropiedadInput: CreatePropiedadInput) {
    return this.propiedadService.create(createPropiedadInput);
  }

  @Query(() => [Propiedad], { name: 'propiedades' })
  findAll() {
    return this.propiedadService.findAll();
  }

  @Query(() => Propiedad, { name: 'propiedad' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.propiedadService.findOne(id);
  }

  @Mutation(() => Propiedad)
  updatePropiedad(@Args('updatePropiedadInput') updatePropiedadInput: UpdatePropiedadInput) {
    return this.propiedadService.update(updatePropiedadInput.id, updatePropiedadInput);
  }

  @Mutation(() => Propiedad)
  removePropiedad(@Args('id', { type: () => Int }) id: number) {
    return this.propiedadService.remove(id);
  }

    // 👇 Resolver para las imágenes asociadas
    @ResolveField(() => [Imagen])
    async imagenes(@Parent() propiedad: Propiedad) {
      return this.propiedadService.findImagenes(propiedad.id);
    }

    
}

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImagenService } from './imagen.service';
import { Imagen } from './entities/imagen.entity';
import { CreateImagenInput } from './dto/create-imagen.input';
import { UpdateImagenInput } from './dto/update-imagen.input';

@Resolver(() => Imagen)
export class ImagenResolver {
  
  constructor(private readonly imagenService: ImagenService) {}

  @Mutation(() => Imagen)
  createImagen(@Args('createImagenInput') createImagenInput: CreateImagenInput) {
    return this.imagenService.create(createImagenInput);
  }

  @Query(() => [Imagen], { name: 'imagenes' })
  findAll() {
    return this.imagenService.findAll();
  }

  @Query(() => Imagen, { name: 'imagen' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imagenService.findOne(id);
  }

  @Mutation(() => Imagen)
  updateImagen(@Args('updateImagenInput') updateImagenInput: UpdateImagenInput) {
    return this.imagenService.update(updateImagenInput.id, updateImagenInput);
  }

  @Mutation(() => Imagen)
  removeImagen(@Args('id', { type: () => Int }) id: number) {
    return this.imagenService.remove(id);
  }
}

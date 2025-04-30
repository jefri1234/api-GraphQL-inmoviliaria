import { Test, TestingModule } from '@nestjs/testing';
import { PropiedadesResolver } from './propiedades.resolver';

describe('PropiedadesResolver', () => {
  let resolver: PropiedadesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropiedadesResolver],
    }).compile();

    resolver = module.get<PropiedadesResolver>(PropiedadesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

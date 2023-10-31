import { Test, TestingModule } from '@nestjs/testing';
import { publicacionController } from './publicacion.controller';
import { publicacionService } from './publicacion.service';

describe('publicacionController', () => {
  let controller: publicacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [publicacionController],
      providers: [publicacionService],
    }).compile();

    controller = module.get<publicacionController>(publicacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

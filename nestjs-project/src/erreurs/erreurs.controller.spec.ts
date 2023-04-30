import { Test, TestingModule } from '@nestjs/testing';
import { ErreursController } from './erreurs.controller';

describe('ErreursController', () => {
  let controller: ErreursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErreursController],
    }).compile();

    controller = module.get<ErreursController>(ErreursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ErreursService } from './erreurs.service';

describe('ErreursService', () => {
  let service: ErreursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErreursService],
    }).compile();

    service = module.get<ErreursService>(ErreursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

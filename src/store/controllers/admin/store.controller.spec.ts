import { Test, TestingModule } from '@nestjs/testing';
import { StoreSellerController } from './store.controller';

describe('StoreSellerController', () => {
  let controller: StoreSellerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreSellerController],
    }).compile();

    controller = module.get<StoreSellerController>(StoreSellerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

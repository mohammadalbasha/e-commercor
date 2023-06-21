import { Test, TestingModule } from '@nestjs/testing';
import { StoreCustomerController } from './store.controller';

describe('StoreCustomerController', () => {
  let controller: StoreCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreCustomerController],
    }).compile();

    controller = module.get<StoreCustomerController>(StoreCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

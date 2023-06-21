import { Test, TestingModule } from '@nestjs/testing';
import { StoreAdminController } from './store.controller';

describe('StoreAdminController', () => {
  let controller: StoreAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreAdminController],
    }).compile();

    controller = module.get<StoreAdminController>(StoreAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

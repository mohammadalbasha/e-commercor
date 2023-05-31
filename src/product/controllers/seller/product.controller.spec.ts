import { Test, TestingModule } from '@nestjs/testing';
import { ProductSellerController } from './product.controller';

describe('ProductSellerController', () => {
  let controller: ProductSellerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductSellerController],
    }).compile();

    controller = module.get<ProductSellerController>(ProductSellerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

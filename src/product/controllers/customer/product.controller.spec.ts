import { Test, TestingModule } from '@nestjs/testing';
import { ProductCustomerController } from './product.controller';

describe('ProductCustomerController', () => {
  let controller: ProductCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCustomerController],
    }).compile();

    controller = module.get<ProductCustomerController>(
      ProductCustomerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CategoryCustomerController } from './category.controller';

describe('CategoryCustomerController', () => {
  let controller: CategoryCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryCustomerController],
    }).compile();

    controller = module.get<CategoryCustomerController>(
      CategoryCustomerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

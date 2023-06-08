import { Test, TestingModule } from '@nestjs/testing';
import { CategorySellerController } from './category.controller';

describe('CategorySellerController', () => {
  let controller: CategorySellerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorySellerController],
    }).compile();

    controller = module.get<CategorySellerController>(CategorySellerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

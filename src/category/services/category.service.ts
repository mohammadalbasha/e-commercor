import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/category/dtos/create-category.dto';
import { CategoryRepository } from 'src/category/repositories/category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRepo: CategoryRepository) {}
  create(data: CreateCategoryDto) {
    return this.categoryRepo.create(data);
  }

  findById(categoryId: string) {
    return this.categoryRepo.findById(categoryId);
  }

  findByStoreId(storeId: string) {
    return this.categoryRepo.findByStoreId(storeId);
  }
}

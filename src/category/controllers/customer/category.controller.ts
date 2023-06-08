import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { CreateCategoryDto } from 'src/category/dtos/create-category.dto';
import { CategoryService } from 'src/category/services/category.service';
import { GetCurrentStore } from 'src/shared/current-store/current-store.decorator';
import { Store } from 'src/store/models/store.model';

@Controller('/:storeId/categories')
export class CategoryCustomerController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  list(@GetCurrentStore() store: Store) {
    return this.categoryService.findByStoreId(store.id);
  }
  @Get('/:id')
  listOne(@Param('id') categoryId) {
    return this.categoryService.findById(categoryId);
  }
}

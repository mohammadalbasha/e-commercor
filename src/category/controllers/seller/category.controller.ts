import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { CreateCategoryDto } from 'src/category/dtos/create-category.dto';
import { CategoryService } from 'src/category/services/category.service';

@UseGuards(AtSellerGuard)
@Controller('/seller/categories')
export class CategorySellerController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(
    @Body() data: Omit<CreateCategoryDto, 'storeId'>,
    @GetSellerStoreId() storeId: string,
  ) {
    return this.categoryService.create({
      ...data,
      storeId,
    });
  }

  @Get()
  list(@GetSellerStoreId() storeId: string) {
    return this.categoryService.findByStoreId(storeId);
  }
}

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { CreateCategoryDto } from 'src/category/dtos/create-category.dto';
import { CategoryService } from 'src/category/services/category.service';

@UseGuards(AtSellerGuard)
@Controller('/seller/categories')
export class CategorySellerController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async create(
    // @Body() data: Omit<CreateCategoryDto, 'storeId'>,
    // dto validations will be missed if we use Omit
    @Body() data: CreateCategoryDto,
    @GetSellerStoreId() storeId: string,
  ) {
    const category = await this.categoryService.create({
      ...data,
      storeId,
    });

    //return category;
    return 'category created successfully';
  }

  @Get()
  list(@GetSellerStoreId() storeId: string) {
    return this.categoryService.findByStoreId(storeId);
  }
  @Get('/:id')
  listOne(@Param('id') categoryId) {
    return this.categoryService.findById(categoryId);
  }
}

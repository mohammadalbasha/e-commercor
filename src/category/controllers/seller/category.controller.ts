import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
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
  async listOne(@Param('id') categoryId, @GetSellerStoreId() storeId: string) {
    const category = await this.categoryService.findById(categoryId);
    if (category.storeId != storeId) {
      throw new UnauthorizedException("you don't have access to this category");
    }
    return category;
  }
}

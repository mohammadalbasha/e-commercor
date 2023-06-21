import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { CategoryService } from 'src/category/services/category.service';
import { CreateProductDto } from 'src/product/dtos/create-product.dto';
import { ProductService } from 'src/product/services/product.service';
import { GetCurrentStore } from 'src/shared/current-store/current-store.decorator';
import { Store } from 'src/store/models/store.model';

@Controller('/:storeId')
export class ProductCustomerController {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {}

  @Get('/:categoryId/products')
  async listAll(
    // @Query('page') page: number,
    // @Query('limit') limit: number,
    @Param('categoryId') categoryId: string,
    @Query() requestQuery,
    @GetCurrentStore() store: Store,
  ) {
    const category = await this.categoryService.findById(categoryId);
    if (category.storeId != store.id) {
      throw new UnauthorizedException("you don't have access to this category");
    }
    let { page, limit, ...filters } = requestQuery;
    page = page || 1;
    limit = limit || 10;
    return this.productService.find(categoryId, filters, page, limit);
  }
  @Get('products')
  async listByStoreId(@Param('storeId') storeId: string) {
    return this.productService.findByStoreId(storeId);
  }

  @Get('/:categoryId/products/:productId')
  async listOne(
    @Param('productId') productId: string,
    @GetCurrentStore() store: Store,
  ) {
    const product = await this.productService.findByIdWithStyle(productId);
    if (product.storeId != store.id) {
      throw new UnauthorizedException("you don't have access to this product");
    }
    return product;
  }
}

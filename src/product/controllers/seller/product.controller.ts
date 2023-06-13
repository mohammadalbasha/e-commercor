import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { CreateProductDto } from 'src/product/dtos/create-product.dto';
import { ProductService } from 'src/product/services/product.service';

@UseGuards(AtSellerGuard)
@Controller('/seller/:categoryId/products')
export class ProductSellerController {
  constructor(private productService: ProductService) {}

  @Post()
  // create(
  //   @Body() data: Omit<CreateProductDto, 'storeId'>,
  //   @GetSellerStoreId() storeId: string,
  // )
  async create(
    @Body() data: CreateProductDto,
    @GetSellerStoreId() storeId: string,
  ) {
    const product = await this.productService.create({
      ...data,
      storeId,
    });
    // return product;
    return 'product added successfully';
  }

  @Get()
  async listAll(
    // @Query('page') page: number,
    // @Query('limit') limit: number,
    @Param('categoryId') categoryId: string,
    @Query() requestQuery,
  ) {
    let { page, limit, ...filters } = requestQuery;
    page = page || 1;
    limit = limit || 10;
    return this.productService.find(categoryId, filters, page, limit);
  }

  @Get('/:productId')
  async listOne(@Param('productId') productId: string) {
    return this.productService.findById(productId);
  }
}

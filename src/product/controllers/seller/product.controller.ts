import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { CategoryService } from 'src/category/services/category.service';
import { CreateProductDto } from 'src/product/dtos/create-product.dto';
import { UpdateProductDto } from 'src/product/dtos/update-product.dto';
import { ProductService } from 'src/product/services/product.service';

@UseGuards(AtSellerGuard)
@Controller('/seller')
export class ProductSellerController {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {}

  @Post('/:categoryId/products')
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

  @Get('/:categoryId/products')
  async listAll(
    // @Query('page') page: number,
    // @Query('limit') limit: number,
    @Param('categoryId') categoryId: string,
    @Query() requestQuery,
    @GetSellerStoreId() storeId: string,
  ) {
    const category = await this.categoryService.findById(categoryId);
    if (category.storeId != storeId) {
      throw new UnauthorizedException("you don't have access to this category");
    }
    let { page, limit, ...filters } = requestQuery;
    page = page || 1;
    limit = limit || 10;
    return this.productService.find(categoryId, filters, page, limit);
  }

  @Get('products')
  async listByStoreId(@GetSellerStoreId() storeId: string) {
    return this.productService.findByStoreId(storeId);
  }

  @Get('/:categoryId/products/:productId')
  async listOne(
    @Param('productId') productId: string,
    @GetSellerStoreId() storeId: string,
  ) {
    const product = await this.productService.findByIdWithStyle(productId);
    if (product.storeId != storeId) {
      throw new UnauthorizedException("you don't have access to this product");
    }
    return product;
  }

  @Put('/:categoryId/products/:productId')
  async updateOne(
    @Param('productId') productId: string,
    @Body() data: UpdateProductDto,
    @GetSellerStoreId() storeId: string,
  ) {
    let product = await this.productService.findById(productId);
    if (product.storeId != storeId) {
      throw new UnauthorizedException("you don't have access to this product");
    }
    product = await this.productService.findByIdAndUpdate(productId, data);
    //return product;
    return 'product updated successfully';
  }

  @Delete('/:categoryId/products/:productId')
  async deleteOne(
    @Param('productId') productId: string,
    @Body() data: UpdateProductDto,
    @GetSellerStoreId() storeId: string,
  ) {
    let product = await this.productService.findById(productId);
    if (product.storeId != storeId) {
      throw new UnauthorizedException("you don't have access to this product");
    }

    await this.productService.findByIdAndDelete(productId);
    //return product;
    return 'product deleted successfully';
  }
}

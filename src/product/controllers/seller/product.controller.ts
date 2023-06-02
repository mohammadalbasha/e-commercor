import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { CreateProductDto } from 'src/product/dtos/create-product.dto';
import { ProductService } from 'src/product/services/product.service';

@UseGuards(AtSellerGuard)
@Controller('/seller/products')
export class ProductSellerController {
  constructor(private productService: ProductService) {}

  @Post()
  // create(
  //   @Body() data: Omit<CreateProductDto, 'storeId'>,
  //   @GetSellerStoreId() storeId: string,
  // )
  create(@Body() data: CreateProductDto, @GetSellerStoreId() storeId: string) {
    return this.productService.create({
      ...data,
      storeId,
    });
  }
}

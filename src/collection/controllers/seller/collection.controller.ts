import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { AddProductToCollectionDto } from 'src/collection/dtos/add-product.dto';
import { CreateCollectionDto } from 'src/collection/dtos/create-collection.dto';
import { CollectionService } from 'src/collection/services/collection.service';
import { GetCurrentStore } from 'src/shared/current-store/current-store.decorator';
import { Store } from 'src/store/models/store.model';

@UseGuards(AtSellerGuard)
@Controller('seller/collections')
export class CollectionSellerController {
  constructor(private collectionService: CollectionService) {}

  @Post()
  async create(
    // @Body() data: Omit<CreateCategoryDto, 'storeId'>,
    // dto validations will be missed if we use Omit
    @Body() data: CreateCollectionDto,
    @GetSellerStoreId() storeId: string,
  ) {
    const collection = await this.collectionService.create({
      ...data,
      storeId,
    });

    //return category;
    return 'collection created successfully';
  }

  @Delete('/:id')
  async delete(
    // @Body() data: Omit<CreateCategoryDto, 'storeId'>,
    // dto validations will be missed if we use Omit
    @GetSellerStoreId() storeId: string,
    @Param('id') collectionId,
  ) {
    const collection = await this.collectionService.deleteCollection(
      collectionId,
      storeId,
    );

    //return category;
    return 'collection deleted successfully';
  }

  @Post('/:id/add-product')
  async addProductToCollection(
    // @Body() data: Omit<CreateCategoryDto, 'storeId'>,
    // dto validations will be missed if we use Omit
    @Body() data: AddProductToCollectionDto,
    @GetSellerStoreId() storeId: string,
    @Param('id') collectionId,
  ) {
    const collection = await this.collectionService.addProductToCollection({
      ...data,
      storeId,
      collectionId,
    });

    //return category;
    return 'product added successfully';
  }

  @Delete('/:id/remove-product')
  async removeProductFromCollection(
    // @Body() data: Omit<CreateCategoryDto, 'storeId'>,
    // dto validations will be missed if we use Omit
    @Body() data: AddProductToCollectionDto,
    @GetSellerStoreId() storeId: string,
    @Param('id') collectionId,
  ) {
    const collection = await this.collectionService.removeProductFromCollection(
      {
        ...data,
        storeId,
        collectionId,
      },
    );

    //return category;
    return 'product removed successfully';
  }

  @Get()
  list(@GetSellerStoreId() storeId: string) {
    return this.collectionService.findByStoreId(storeId);
  }
  @Get('/:id')
  listOne(@Param('id') collectionId, @GetSellerStoreId() storeId: string) {
    return this.collectionService.findById(collectionId, storeId);
  }
}

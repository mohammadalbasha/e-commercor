import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
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
    const category = await this.collectionService.create({
      ...data,
      storeId,
    });

    //return category;
    return 'collection created successfully';
  }

  @Post('/:id/add-product')
  async addProductToCollection(
    // @Body() data: Omit<CreateCategoryDto, 'storeId'>,
    // dto validations will be missed if we use Omit
    @Body() data: AddProductToCollectionDto,
    @GetSellerStoreId() storeId: string,
    @Param('id') collectionId,
  ) {
    const category = await this.collectionService.addProductToCollection({
      ...data,
      storeId,
      collectionId,
    });

    //return category;
    return 'collection created successfully';
  }

  @Get()
  list(@GetCurrentStore() store: Store) {
    return this.collectionService.findByStoreId(store.id);
  }
  @Get('/:id')
  listOne(@Param('id') collectionId) {
    return this.collectionService.findById(collectionId);
  }
}

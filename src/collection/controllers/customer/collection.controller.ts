import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { CollectionService } from 'src/collection/services/collection.service';
import { GetCurrentStore } from 'src/shared/current-store/current-store.decorator';
import { Store } from 'src/store/models/store.model';
import { AtCustomerGuard } from 'src/authentication/customers/guards';

@Controller('/:storeId/collections')
export class CollectionCustomerController {
  constructor(private collectionService: CollectionService) {}

  @Get()
  list(@GetCurrentStore() store: Store) {
    return this.collectionService.findByStoreId(store.id);
  }
  @Get('/:id')
  listOne(@Param('id') collectionId, @GetCurrentStore() store: Store) {
    return this.collectionService.findById(collectionId, store.id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from 'src/collection/dtos/create-collection.dto';
import { CollectionRepository } from 'src/collection/repositories/collection.repository';
import { AddProductToCollectionDto } from '../dtos/add-product.dto';

@Injectable()
export class CollectionService {
  constructor(private collectionRepo: CollectionRepository) {}
  create(data: CreateCollectionDto) {
    return this.collectionRepo.create(data);
  }

  async addProductToCollection(data: AddProductToCollectionDto) {
    // TODO:
    // fetch store with data.storeId
    // check if store.seller.id == sellerId
    return this.collectionRepo.addProductToCollection(
      data.collectionId,
      data.productId,
    );
  }

  findById(collectionId: string) {
    return this.collectionRepo.findById(collectionId);
  }

  findByStoreId(storeId: string) {
    return this.collectionRepo.findByStoreId(storeId);
  }
}

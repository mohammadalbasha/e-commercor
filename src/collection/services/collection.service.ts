import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCollectionDto } from 'src/collection/dtos/create-collection.dto';
import { CollectionRepository } from 'src/collection/repositories/collection.repository';
import { AddProductToCollectionDto } from '../dtos/add-product.dto';
import { ProductService } from 'src/product/services/product.service';

@Injectable()
export class CollectionService {
  constructor(
    private collectionRepo: CollectionRepository,
    private prodcutService: ProductService,
  ) {}
  create(data: CreateCollectionDto) {
    return this.collectionRepo.create(data);
  }

  async addProductToCollection(data: AddProductToCollectionDto) {
    const product = await this.prodcutService.findById(data.productId);
    if (product.storeId != data.storeId) {
      throw new UnauthorizedException("you don't have access to this product");
    }

    return this.collectionRepo.addProductToCollection(
      data.collectionId,
      data.productId,
    );
  }

  async findById(collectionId: string, storeId: string) {
    const collection = await this.collectionRepo.findById(collectionId);
    if (collection.storeId != storeId) {
      throw new UnauthorizedException(
        "you don't have access to this collection",
      );
    }
    return collection;
  }

  findByStoreId(storeId: string) {
    return this.collectionRepo.findByStoreId(storeId);
  }
}

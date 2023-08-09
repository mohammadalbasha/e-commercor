import mongoose from 'mongoose';
import { CreateCollectionDto } from '../dtos/create-collection.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Collection, CollectionDocument } from '../models/collection.model';
import { NotFoundException } from '@nestjs/common';

export class CollectionRepository {
  constructor(
    @InjectModel(Collection.name)
    private readonly collection: mongoose.Model<
      Collection & CollectionDocument
    >,
  ) {}

  async create(data: CreateCollectionDto) {
    const collection = await this.collection.create(data);
    return collection;
  }

  async deleteOne(collectionId: string) {
    const collection = await this.collection.findById(collectionId);
    if (!collection) {
      throw new NotFoundException('collection not found');
    }
    return this.collection.findByIdAndDelete(collectionId);
  }

  async addProductToCollection(collectionId: string, productId: string) {
    const collection = await this.collection.findById(collectionId);
    if (!collection) {
      throw new NotFoundException('collection not found');
    }
    collection.productsId.push(productId);
    await collection.save();
    return collection;
  }

  async removeProductFromCollection(collectionId: string, productId: string) {
    const collection = await this.collection.findById(collectionId);
    if (!collection) {
      throw new NotFoundException('collection not found');
    }
    collection.productsId = collection.productsId.filter((item) => {
      return item != productId;
    });
    await collection.save();
    return collection;
  }

  async findById(collectionId: string) {
    const collection = await this.collection
      .findById(collectionId)
      .populate('products');
    return collection;
  }

  async findByStoreId(storeId: string) {
    const collections = await this.collection
      .find({
        storeId: storeId,
      })
      .populate('products');
    return collections;
  }

  findOne(filter: Partial<Collection>) {
    return this.collection
      .findOne({
        ...filter,
      })
      .populate('products')
      .exec();
  }
}

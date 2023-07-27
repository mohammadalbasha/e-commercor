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

  async addProductToCollection(collectionId: string, productId: string) {
    const collection = await this.collection.findById(collectionId);
    if (!collection) {
      throw new NotFoundException('collection not found');
    }
    collection.productsId.push(productId);
    await collection.save();
    return collection;
  }

  async findById(collectionId: string) {
    const collection = await this.collection.findById(collectionId);
    return collection;
  }

  async findByStoreId(storeId: string) {
    const categories = await this.collection.find({
      storeId: storeId,
    });
    return categories;
  }

  // TODO:
  // make a filter type decorator and filter dto
  async findAll(filter: Partial<Collection>) {
    return this.collection.find({
      ...filter,
    });
  }

  findOne(filter: Partial<Collection>) {
    return this.collection.findOne({
      ...filter,
    });
  }
}

import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Seller, Store, StoreDocument } from '../models/store.model';
import mongoose from 'mongoose';
import { CreateStoreDto } from '../dtos/create-store.dto';
import { Injectable } from '@nestjs/common';
import {
  convertObjectToNested,
  convertToDotNotation,
} from 'src/shared/mongoose/helperFunctions/convertNestedObject.helper';
import { exec } from 'child_process';

@Injectable()
export class StoreRepository {
  constructor(
    @InjectModel(Store.name)
    private readonly store: mongoose.Model<Store & StoreDocument>,
    @InjectConnection() protected connection: mongoose.Connection,
  ) {}

  async create(
    input: Omit<CreateStoreDto, 'seller'> & {
      seller: { name: string; password: string };
    },
  ) {
    const store = await this.store.create(input);
    await store.save();
    return store;
  }

  async findAll(filters: Partial<Store>, page, limit) {
    const skip = (+page - 1) * limit;
    const items = await this.store
      .find({ ...filters })
      .skip(skip)
      .limit(limit)
      .exec();
    const count = await this.store.countDocuments(filters).exec();

    return {
      items,
      totalPages: Math.ceil(count / limit),
      currentPage: +page,
      totalItems: count,
    };
  }

  async findUnReadStores() {
    return this.store.countDocuments({ isRead: false }).exec();
  }

  findOne(filter: Partial<Store>) {
    return this.store.findOne({
      ...filter,
    });
  }

  findById(storeId: string) {
    return this.store.findById(storeId);
  }

  findByName(storeName: string) {
    return this.store.findOne({ name: storeName });
  }

  findByIdAndUpdate(storeId: string, data: Partial<Store>) {
    return this.store.findByIdAndUpdate(storeId, { ...data }, { new: true });
  }

  findBySellerIdAndUpdate(sellerId: string, data: Partial<Store>) {
    return this.store.findOneAndUpdate(
      { 'seller._id': sellerId },
      { ...data },
      { new: true },
    );
  }

  async findBySellerId(sellerId: string) {
    const store = await this.store.findOne({
      'seller._id': sellerId,
    });
    return store;
  }

  async findSeller(filter: Partial<Seller>) {
    const nestedFilter = convertObjectToNested('seller', filter);
    const dottedFilter = convertToDotNotation(nestedFilter);
    const seller = await this.store.findOne(
      {
        ...dottedFilter,
      },
      {
        seller: 1,
      },
    );
    return seller?.seller;
  }

  async findSellerById(sellerId: string): Promise<Seller> {
    const seller = await this.store.findOne(
      {
        'seller._id': sellerId,
      },
      {
        seller: 1,
      },
    );

    return seller?.seller;
  }

  async findSellerByEmail(email: string): Promise<Seller> {
    const seller = await this.store.findOne(
      {
        'seller.email': email,
      },
      {
        seller: 1,
      },
    );

    return seller?.seller;
  }

  async findSellerAndUpdate(filter: Partial<Seller>, data: Partial<Seller>) {
    const updatedUser = await this.store.updateOne;
  }

  async findSellerByIdAndUpdate(sellerId: string, data: Partial<Seller>) {
    const nestedSeller = convertObjectToNested('seller', data);
    const dottedSeller = convertToDotNotation(nestedSeller);
    const updatedUser = await this.store.updateOne(
      {
        'seller._id': sellerId,
      },
      {
        $set: {
          ...dottedSeller,
        },
      },
    );
    return updatedUser;
  }
}

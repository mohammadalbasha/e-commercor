import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateStoreDto } from '../dtos/create-store.dto';
import { StoreRepository } from '../repositories/store.repository';
import { PasswordService } from 'src/authentication/password.service';
import { Seller, Store } from '../models/store.model';
import { MarketDto } from '../dtos/market-store.dto';
import { filterToMongo } from 'src/shared/mongoose/helperFunctions/filter.helper';
import { AddLogo } from '../dtos/add-logo.dto';

@Injectable()
export class StoreService {
  constructor(
    private storeRepo: StoreRepository,
    private passwordService: PasswordService,
  ) {}

  async create(input: CreateStoreDto) {
    const hashedPassword = await this.passwordService.hashPassword(
      input.seller.password,
    );
    const { confirmPassword, ...seller } = input.seller;

    console.log(input);
    const store = await this.storeRepo.create({
      ...input,
      seller: {
        ...seller,
        password: hashedPassword,
      },
    });
    await store.save();
    // confirm email
    return store;
  }

  findBySellerId(sellerId: string) {
    return this.storeRepo.findBySellerId(sellerId);
  }

  convertFilters(filters) {
    const output = {};
    for (const key in filters) {
      let [type, name] = key.split(/(?=[A-Z])/);
      if (type != 'seller') {
        output[key] = filters[key];
      } else {
        const value = filters[key];
        name = name.toLowerCase();
        output[`seller.${name}`] = value;
      }
    }

    return output;
  }

  findAll(filter: Partial<Store>, page, limit) {
    filter = this.convertFilters(filter);
    filter = filterToMongo(filter);
    return this.storeRepo.findAll(filter, page, limit);
  }

  async findUnReadStores() {
    return this.storeRepo.findUnReadStores();
  }

  findOne(filter: Partial<Store>) {
    return this.storeRepo.findOne(filter);
  }

  findById(storeId: string) {
    return this.storeRepo.findById(storeId);
  }

  async findByName(storeName: string) {
    const store = await this.storeRepo.findByName(storeName);
    if (!store) throw new NotFoundException('store with this name not found');
    // if (
    //   !store.isActive ||
    //   !store.isVerifiedAsMarket ||
    //   store.paypalMerchantId == 'f' ||
    //   !store.isAccepted
    // )
    //   throw new BadRequestException('store inactive');
    return store;
  }

  findByIdAndUpdate(storeId: string, data: Partial<Store>) {
    return this.storeRepo.findByIdAndUpdate(storeId, data);
  }

  findSeller(filter: Partial<Seller>) {
    return this.storeRepo.findSeller(filter);
  }

  findSellerById(sellerId: string) {
    return this.storeRepo.findSellerById(sellerId);
  }

  findSellerByEmail(email: string) {
    return this.storeRepo.findSellerByEmail(email);
  }

  findSellerAndUpdate(filter: Partial<Seller>, data: Partial<Seller>) {
    return this.storeRepo.findSellerAndUpdate(filter, data);
  }

  findSellerByIdAndUpdate(sellerId: string, data: Partial<Seller>) {
    return this.storeRepo.findSellerByIdAndUpdate(sellerId, data);
  }

  addLandingPage(sellerId, data) {
    return this.storeRepo.findBySellerIdAndUpdate(sellerId, {
      landingPage: data,
    });
  }

  addMarketPlace(sellerId, data: MarketDto) {
    return this.storeRepo.findBySellerIdAndUpdate(sellerId, {
      ...data,
      isMarket: true,
      isVerifiedAsMarket: false,
    });
  }

  addLogo(sellerId, data: AddLogo) {
    return this.storeRepo.findBySellerIdAndUpdate(sellerId, {
      ...data,
    });
  }
}

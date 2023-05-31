import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from '../dtos/create-store.dto';
import { StoreRepository } from '../repositories/store.repository';
import { PasswordService } from 'src/authentication/password.service';
import { Seller, Store } from '../models/store.model';

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

  findAll(filter: Partial<Store>) {
    return this.storeRepo.findAll(filter);
  }

  findOne(filter: Partial<Store>) {
    return this.storeRepo.findOne(filter);
  }

  findById(storeId: string) {
    return this.storeRepo.findById(storeId);
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
}

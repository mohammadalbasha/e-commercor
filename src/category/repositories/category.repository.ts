import mongoose from 'mongoose';
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from '../models/category.model';

export class CategoryRepository {
  constructor(
    @InjectModel(Category.name)
    private readonly category: mongoose.Model<Category & CategoryDocument>,
  ) {}

  async create(data: CreateCategoryDto) {
    const category = await this.category.create(data);
    return category;
  }

  async findById(categoryId: string) {
    const category = await this.category.findById(categoryId);
    return category;
  }

  async findByStoreId(storeId: string) {
    const categories = await this.category.find({
      storeId: storeId,
    });
    return categories;
  }

  // TODO:
  // make a filter type decorator and filter dto
  async findAll(filter: Partial<Category>) {
    return this.category.find({
      ...filter,
    });
  }

  findOne(filter: Partial<Category>) {
    return this.category.findOne({
      ...filter,
    });
  }
}

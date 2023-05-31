import { Module } from '@nestjs/common';
import { CategoryService } from './services/category.service';
import { CategorySellerController } from './controllers/seller/category.controller';
import { CategoryRepository } from './repositories/category.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './models/category.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  providers: [CategoryService, CategoryRepository],
  controllers: [CategorySellerController],
  exports: [CategoryService],
})
export class CategoryModule {}

import { Module } from '@nestjs/common';
import { FeedbackService } from './services/feedback.service';
import { FeedbackSellerController } from './controllers/seller/feedback.controller';
import { FeedbackRepository } from './repositories/feedback.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Feedback, FeedbackSchema } from './models/feedback.model';
import { FeedbackCustomerController } from './controllers/customer/feedback.controller';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Feedback.name, schema: FeedbackSchema },
    ]),
    ProductModule,
  ],
  providers: [FeedbackService, FeedbackRepository],
  controllers: [FeedbackSellerController, FeedbackCustomerController],
  exports: [FeedbackService],
})
export class FeedbackModule {}

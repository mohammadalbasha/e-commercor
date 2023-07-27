import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateFeedbackDto } from '../dtos/create-feedback.dto';
import { FeedbackRepository } from '../repositories/feedback.repository';

@Injectable()
export class FeedbackService {
  constructor(private feedbackRepo: FeedbackRepository) {}
  create(data: CreateFeedbackDto) {
    return this.feedbackRepo.create(data);
  }

  async findByProductId(productId: string) {
    const feedbacks = await this.feedbackRepo.findAll({ productId: productId });
    return feedbacks;
  }

  async findByCustomerId(customerId: string) {
    const feedbacks = await this.feedbackRepo.findAll({
      customerId: customerId,
    });
    return feedbacks;
  }
}

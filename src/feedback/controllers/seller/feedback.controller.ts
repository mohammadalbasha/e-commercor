import { UseGuards, Controller, Get, Param } from '@nestjs/common';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { FeedbackService } from 'src/feedback/services/feedback.service';

@UseGuards(AtSellerGuard)
@Controller('seller/feedbacks')
export class FeedbackSellerController {
  constructor(private feedbackService: FeedbackService) {}
  @Get('/:productId')
  list(@Param('productId') productId: string) {
    return this.feedbackService.findByProductId(productId);
  }
}

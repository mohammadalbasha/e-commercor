import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AtCustomerGuard } from 'src/authentication/customers/guards';
import { GetCurrentUserId } from 'src/authentication/decorators';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { CreateFeedbackDto } from 'src/feedback/dtos/create-feedback.dto';
import { FeedbackService } from 'src/feedback/services/feedback.service';
import { GetCurrentStore } from 'src/shared/current-store/current-store.decorator';
import { Store } from 'src/store/models/store.model';

@Controller('/:storeId/feedbacks')
export class FeedbackCustomerController {
  constructor(private feedbackService: FeedbackService) {}

  @UseGuards(AtCustomerGuard)
  @Post()
  async create(
    // @Body() data: Omit<CreateCategoryDto, 'storeId'>,
    // dto validations will be missed if we use Omit
    @Body() data: CreateFeedbackDto,
    @GetSellerStoreId() storeId: string,
    @GetCurrentUserId() userId: string,
  ) {
    const feedback = await this.feedbackService.create({
      ...data,
      storeId,
      customerId: userId,
    });

    return 'feedback created successfully';
  }

  @UseGuards(AtCustomerGuard)
  @Get('/my-feedbacks')
  listMyFeedbacks(@GetCurrentUserId() userId: string) {
    return this.feedbackService.findByCustomerId(userId);
  }

  @Get('/:productId')
  list(@Param('productId') productId: string) {
    return this.feedbackService.findByProductId(productId);
  }
}

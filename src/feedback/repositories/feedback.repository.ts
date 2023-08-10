import mongoose from 'mongoose';
import { CreateFeedbackDto } from '../dtos/create-feedback.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Feedback, FeedbackDocument } from '../models/feedback.model';
import { NotFoundException } from '@nestjs/common';

export class FeedbackRepository {
  constructor(
    @InjectModel(Feedback.name)
    private readonly feedback: mongoose.Model<Feedback & FeedbackDocument>,
  ) {}

  async create(data: CreateFeedbackDto) {
    const feedback = await this.feedback.create(data);
    return feedback;
  }

  // TODO:
  // make a filter type decorator and filter dto
  async findAll(filter: Partial<Feedback>) {
    return this.feedback
      .find({
        ...filter,
      })
      .populate('customer', { id: 1, firstName: 1, lastName: 1 });
  }
}

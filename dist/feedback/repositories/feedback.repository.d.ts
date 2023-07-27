import mongoose from 'mongoose';
import { CreateFeedbackDto } from '../dtos/create-feedback.dto';
import { Feedback, FeedbackDocument } from '../models/feedback.model';
export declare class FeedbackRepository {
    private readonly feedback;
    constructor(feedback: mongoose.Model<Feedback & FeedbackDocument>);
    create(data: CreateFeedbackDto): Promise<mongoose.Document<unknown, {}, Feedback & Document> & Omit<Feedback & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findAll(filter: Partial<Feedback>): Promise<(mongoose.Document<unknown, {}, Feedback & Document> & Omit<Feedback & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>)[]>;
}

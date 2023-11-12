import { model, Schema, Types } from 'mongoose';
import { IReview } from './interface';

const reviewSchema = new Schema<IReview>(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    service: { type: Types.ObjectId, ref: 'CleaningService', required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
  },
  { timestamps: true }
);

export const Review = model<IReview>('Review', reviewSchema);

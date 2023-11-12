import { Schema } from 'mongoose';

export type IReview = {
  user: Schema.Types.ObjectId;
  service: Schema.Types.ObjectId;
  rating: number;
  review: string;
};

export type IReviewSearch = { searchTerm?: string };

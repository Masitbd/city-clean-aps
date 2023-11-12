import { ObjectId } from 'mongoose';
import { IReview } from './interface';
import { Review } from './modal';

const createAdmin = async (authUserId: ObjectId, payload: IReview) => {
  payload.user = authUserId;
  const review = await Review.create(payload);
  return review;
};

const getReviews = async () => {
  const reviews = await Review.find();

  return reviews;
};

const getReview = async (id: string) => {
  const review = await Review.findById(id);
  return review;
};

const updateReview = async (id: string, payload: Partial<IReview>) => {
  const review = await Review.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return review;
};

const deleteReview = async (id: string) => {
  const review = await Review.findByIdAndDelete(id);
  return review;
};

export const ReviewService = {
  createAdmin,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};

import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewService } from './service';

const createAdmin: RequestHandler = catchAsync(async (req, res) => {
  const adminData = req.body;
  const authUserId = req.user?._id;
  const result = await ReviewService.createAdmin(authUserId, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

const getReviews: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReviewService.getReviews();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews data fetched successfully',
    data: result,
  });
});

const getReviewsByServiceId: RequestHandler = catchAsync(async (req, res) => {
  const serviceId = req.params.serviceId;
  const result = await ReviewService.getReviewsByServiceId(serviceId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews data fetched successfully',
    data: result,
  });
});

const getReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ReviewService.getReview(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review data fetched successfully',
    data: result,
  });
});

const updateReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const reviewData = req.body;
  const result = await ReviewService.updateReview(id, reviewData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review updated successfully',
    data: result,
  });
});

const deleteReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ReviewService.deleteReview(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

export const ReviewController = {
  createAdmin,
  getReview,
  getReviews,
  getReviewsByServiceId,
  updateReview,
  deleteReview,
};

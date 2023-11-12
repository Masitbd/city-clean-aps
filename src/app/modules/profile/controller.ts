import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProfileService } from './service';

const getProfile: RequestHandler = catchAsync(async (req, res) => {
  const id = req.user?._id;
  const result = await ProfileService.getProfile(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile data fetched successfully',
    data: result,
  });
});

const updateProfile: RequestHandler = catchAsync(async (req, res) => {
  const id = req.user?._id;
  const profileData = req.body;
  const result = await ProfileService.updateProfile(id, profileData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully',
    data: result,
  });
});

export const ProfileController = {
  getProfile,
  updateProfile,
};

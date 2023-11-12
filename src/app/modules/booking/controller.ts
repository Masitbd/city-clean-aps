import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { ObjectId } from 'mongoose';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { bookingSearchAndFilter } from './constant';
import { BookingService } from './service';

const createAdmin: RequestHandler = catchAsync(async (req, res) => {
  const authUserId = req?.user?._id as ObjectId;
  const adminData = req.body;
  const result = await BookingService.createAdmin(authUserId, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

const getBookings: RequestHandler = catchAsync(async (req, res) => {
  const paginationOPtions = pick(req.query, paginationFields);
  const filtersOPtions = pick(req.query, bookingSearchAndFilter);
  const result = await BookingService.getBookings(
    paginationOPtions,
    filtersOPtions
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getBooking: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await BookingService.getBooking(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking data fetched successfully',
    data: result,
  });
});

const updateBookingStatus: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const status = req.body;
  const result = await BookingService.updateBookingStatus(id, status);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking data fetched successfully',
    data: result,
  });
});

export const BookingController = {
  createAdmin,
  getBooking,
  getBookings,
  updateBookingStatus,
};

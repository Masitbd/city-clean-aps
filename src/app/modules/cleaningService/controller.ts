import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { cleaningServiceSearchAndFilter } from './constant';
import { CleaningServiceService } from './service';

const createCleaningService: RequestHandler = catchAsync(async (req, res) => {
  const cleaningServiceData = req.body;
  const result = await CleaningServiceService.createCleaningService(
    cleaningServiceData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cleaning Service created successfully',
    data: result,
  });
});

const getCleaningServices: RequestHandler = catchAsync(async (req, res) => {
  const paginationOPtions = pick(req.query, paginationFields);
  const filtersOPtions = pick(req.query, cleaningServiceSearchAndFilter);
  const result = await CleaningServiceService.getCleaningServices(
    paginationOPtions,
    filtersOPtions
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CleaningServices data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getCleaningService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CleaningServiceService.getCleaningService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CleaningService data fetched successfully',
    data: result,
  });
});

const updateCleaningService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const cleaningServiceData = req.body;
  const result = await CleaningServiceService.updateCleaningService(
    id,
    cleaningServiceData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CleaningService updated successfully',
    data: result,
  });
});

const deleteCleaningService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CleaningServiceService.deleteCleaningService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CleaningService created successfully',
    data: result,
  });
});

export const CleaningServiceController = {
  createCleaningService,
  getCleaningService,
  getCleaningServices,
  updateCleaningService,
  deleteCleaningService,
};

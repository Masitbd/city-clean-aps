import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { contentSearchFilter } from './constant';
import { ContentManagementService } from './service';

const createContentManagement: RequestHandler = catchAsync(async (req, res) => {
  const contentManagementData = req.body;
  const result = await ContentManagementService.createContentManagement(
    contentManagementData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ContentManagement created successfully',
    data: result,
  });
});

const getContentManagements: RequestHandler = catchAsync(async (req, res) => {
  const searchFilterOptions = pick(req.query, contentSearchFilter);
  console.log(searchFilterOptions);
  const result = await ContentManagementService.getContentManagements(
    searchFilterOptions
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ContentManagement created successfully',
    data: result,
  });
});

const updateContentManagement: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const contentManagementData = req.body;
  const result = await ContentManagementService.updateContentManagement(
    id,
    contentManagementData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ContentManagement updated successfully',
    data: result,
  });
});

const deleteContentManagement: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ContentManagementService.deleteContentManagement(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ContentManagement deleted successfully',
    data: result,
  });
});

export const ContentManagementController = {
  createContentManagement,
  getContentManagements,
  updateContentManagement,
  deleteContentManagement,
};

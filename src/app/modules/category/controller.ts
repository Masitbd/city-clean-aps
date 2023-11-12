import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { categorySearchAndFilter } from './constant';
import { CategoryService } from './service';

const createAdmin: RequestHandler = catchAsync(async (req, res) => {
  const adminData = req.body;
  const result = await CategoryService.createAdmin(adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

const getCategorys: RequestHandler = catchAsync(async (req, res) => {
  const paginationOPtions = pick(req.query, paginationFields);
  const filtersOPtions = pick(req.query, categorySearchAndFilter);
  const result = await CategoryService.getCategorys(
    paginationOPtions,
    filtersOPtions
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categorys data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getCategory: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CategoryService.getCategory(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category data fetched successfully',
    data: result,
  });
});

const updateCategory: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const categoryData = req.body;
  const result = await CategoryService.updateCategory(id, categoryData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result,
  });
});

const deleteCategory: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CategoryService.deleteCategory(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

export const CategoryController = {
  createAdmin,
  getCategory,
  getCategorys,
  updateCategory,
  deleteCategory,
};

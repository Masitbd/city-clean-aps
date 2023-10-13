import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { AuthService } from './service';

const signUp: RequestHandler = catchAsync(async(req, res) => {

    const signUpData = {}
    const result = await AuthService.signUp(signUpData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Signed Up successfully',
    data: result,
  });
});

export const AuthController = { signUp };

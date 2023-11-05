import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './controllers';
import { AuthValidations } from './validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidations.signUp),
  AuthController.signUp
);

router.post(
  '/signin',
  validateRequest(AuthValidations.signIn),
  AuthController.signIn
);

export const AuthRoutes = router;

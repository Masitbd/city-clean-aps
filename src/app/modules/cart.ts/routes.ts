import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CartController } from './controller';
import { CartValidations } from './validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(CartValidations.createCart),
  CartController.createAdmin
);

router.get('/', CartController.getCarts);

router.get('/service/:id', CartController.getCartsByServiceId);

router.delete('/:id', auth(ENUM_USER_ROLE.CUSTOMER), CartController.deleteCart);

export const CartRoutes = router;

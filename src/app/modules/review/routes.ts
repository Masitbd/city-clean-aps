import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewController } from './controller';
import { ReviewValidations } from './validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(ReviewValidations.createReview),
  ReviewController.createAdmin
);

router.get('/', ReviewController.getReviews);

router.get('/:id', auth(ENUM_USER_ROLE.CUSTOMER), ReviewController.getReview);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(ReviewValidations.updateReview),
  ReviewController.updateReview
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER),
  ReviewController.deleteReview
);

export const ReviewRoutes = router;

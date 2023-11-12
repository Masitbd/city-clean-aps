import express from 'express';
import { AuthRoutes } from '../modules/auth/routes';
import { BookingRoutes } from '../modules/booking/routes';
import { CartRoutes } from '../modules/cart.ts/routes';
import { CategoryRoutes } from '../modules/category/routes';
import { CleaningServiceRoutes } from '../modules/cleaningService/routes';
import { FeedbackRoutes } from '../modules/feedback/routes';
import { ProfileRoutes } from '../modules/profile/routes';
import { ReviewRoutes } from '../modules/review/routes';
import { UserRoutes } from '../modules/user/routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/categories',
    routes: CategoryRoutes,
  },
  {
    path: '/cleaning-service',
    routes: CleaningServiceRoutes,
  },
  {
    path: '/bookings',
    routes: BookingRoutes,
  },
  {
    path: '/reviews',
    routes: ReviewRoutes,
  },
  {
    path: '/profile',
    routes: ProfileRoutes,
  },
  {
    path: '/feedbacks',
    routes: FeedbackRoutes,
  },
  {
    path: '/carts',
    routes: CartRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;

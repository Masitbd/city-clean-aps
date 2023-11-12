import express from 'express';
import { AuthRoutes } from '../modules/auth/routes';
import { BookingRoutes } from '../modules/booking/routes';
import { CleaningServiceRoutes } from '../modules/cleaningService/routes';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;

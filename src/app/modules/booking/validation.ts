import { z } from 'zod';
import { ENUM_BOOKING_STATUS } from './interface';

const createBooking = z.object({
  body: z.object({
    service: z.string({ required_error: 'Service is required' }),
    serviceDate: z.string({ required_error: 'Service Date is required' }),
  }),
});

const updateBookingStatus = z.object({
  body: z.object({
    status: z.enum(
      Object.values(ENUM_BOOKING_STATUS) as [string, ...string[]],
      { required_error: 'Service Date is required' }
    ),
  }),
});

export const BookingValidations = { createBooking, updateBookingStatus };

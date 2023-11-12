import { model, Schema, Types } from 'mongoose';
import { ENUM_BOOKING_STATUS, IBooking } from './interface';

const bookingSchema = new Schema<IBooking>(
  {
    orderBy: { type: Types.ObjectId, ref: 'User', required: true },
    service: { type: Types.ObjectId, ref: 'CleaningService', required: true },
    serviceDate: { type: Date, required: true },
    status: {
      type: String,
      enum: Object.values(ENUM_BOOKING_STATUS),
      default: ENUM_BOOKING_STATUS.PENDING,
    },
  },
  { timestamps: true }
);

export const Booking = model<IBooking>('Booking', bookingSchema);

/* eslint-disable no-unused-vars */
import { Schema } from 'mongoose';

export enum ENUM_BOOKING_STATUS {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REFECTED = 'rejected',
}

export type IBooking = {
  orderBy: Schema.Types.ObjectId;
  service: Schema.Types.ObjectId;
  serviceDate: Date;
  status: ENUM_BOOKING_STATUS;
};

export type IBookingStatusPayload = {
  status: string;
};

export type IBookingSearch = { searchTerm?: string };

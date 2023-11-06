import { Schema } from 'mongoose';

/* eslint-disable no-unused-vars */
export enum ENUM_CLEANING_SERVICE_STATUS {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
}

export type ICleaningService = {
  title: string;
  price: number;
  status: ENUM_CLEANING_SERVICE_STATUS;
  description: string;
  category: Schema.Types.ObjectId;
};

export type ICleaningServiceSearch = { searchTerm?: string };

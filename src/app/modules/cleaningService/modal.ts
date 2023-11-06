import { model, Schema, Types } from 'mongoose';
import { ENUM_CLEANING_SERVICE_STATUS, ICleaningService } from './interface';

const cleaningServiceSchema = new Schema<ICleaningService>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, default: ENUM_CLEANING_SERVICE_STATUS.UNAVAILABLE },
    description: { type: String, required: true },
    category: { type: Types.ObjectId, ref: 'Category' },
  },
  { timestamps: true }
);

export const CleaningService = model<ICleaningService>(
  'CleaningService',
  cleaningServiceSchema
);

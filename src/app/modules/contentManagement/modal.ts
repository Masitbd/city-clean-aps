import { model, Schema } from 'mongoose';
import {
  ENUM_CONTENT_VISIBILITY_STATUS,
  IContentManagement,
} from './interface';

const contentManagementSchema = new Schema<IContentManagement>(
  {
    title: { type: String, required: true },
    status: { type: String, default: ENUM_CONTENT_VISIBILITY_STATUS.VISIBLE },
  },
  { timestamps: true }
);

export const ContentManagement = model<IContentManagement>(
  'ContentManagement',
  contentManagementSchema
);

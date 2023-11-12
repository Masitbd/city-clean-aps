import { model, Schema, Types } from 'mongoose';
import { IFeedback } from './interface';

const feedbackSchema = new Schema<IFeedback>(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    service: { type: Types.ObjectId, ref: 'CleaningService', required: true },
    feedback: { type: String, required: true },
  },
  { timestamps: true }
);

export const Feedback = model<IFeedback>('Feedback', feedbackSchema);

import { Schema } from 'mongoose';

export type IFeedback = {
  user: Schema.Types.ObjectId;
  service: Schema.Types.ObjectId;
  feedback: string;
};

export type IFeedbackSearch = { searchTerm?: string };

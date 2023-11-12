import { Schema } from 'mongoose';

export type ICart = {
  user: Schema.Types.ObjectId;
  service: Schema.Types.ObjectId;
};

export type ICartSearch = { searchTerm?: string };

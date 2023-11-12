import { model, Schema } from 'mongoose';
import { ICategory } from './interface';

const categorySchema = new Schema<ICategory>(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

export const Category = model<ICategory>('Category', categorySchema);

import { model, Schema } from 'mongoose';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { IUser } from './interface';

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNo: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    role: { type: String, default: ENUM_USER_ROLE.CUSTOMER },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);

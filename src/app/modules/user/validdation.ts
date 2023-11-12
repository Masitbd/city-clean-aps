import { z } from 'zod';
import { ENUM_USER_ROLE } from '../../../enums/user';

const createAdmin = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    age: z.number({ required_error: 'Age is required' }),
    contactNo: z.string({ required_error: 'Contact No is required' }),
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' }),
    role: z
      .enum(Object.values(ENUM_USER_ROLE) as [string, ...string[]])
      .optional(),
    address: z.string({ required_error: 'Address is required' }),
  }),
});

const updateUser = z.object({
  body: z.object({
    name: z.string().optional(),
    age: z.number().optional(),
    contactNo: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    role: z
      .enum(Object.values(ENUM_USER_ROLE) as [string, ...string[]])
      .optional(),
    address: z.string().optional(),
  }),
});

export const UserValidations = { createAdmin, updateUser };

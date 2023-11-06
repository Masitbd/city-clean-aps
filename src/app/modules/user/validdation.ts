import { z } from 'zod';

const createAdmin = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    age: z.number({ required_error: 'Age is required' }),
    contactNo: z.string({ required_error: 'Contact No is required' }),
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' }),
    confirmPassword: z.string({
      required_error: 'Confirm Password is required',
    }),
    address: z.string({ required_error: 'Address is required' }),
  }),
});

export const UserValidations = { createAdmin };

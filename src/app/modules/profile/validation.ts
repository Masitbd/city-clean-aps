import { z } from 'zod';

const updateProfile = z.object({
  body: z.object({
    name: z.string().optional(),
    age: z.string().optional(),
    email: z.string().optional(),
  }),
});

export const ProfileValidations = { updateProfile };

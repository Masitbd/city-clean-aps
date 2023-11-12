import { z } from 'zod';

const createCart = z.object({
  body: z.object({
    service: z.string({ required_error: 'Service Id is required' }),
  }),
});

const updateCart = z.object({
  body: z.object({
    service: z.string().optional(),
  }),
});

export const CartValidations = { createCart, updateCart };

import { z } from 'zod';

const createReview = z.object({
  body: z.object({
    service: z.string({ required_error: 'Service Id is required' }),
    rating: z.number({ required_error: 'Rating Id is required' }),
    review: z.string({ required_error: 'Review is required' }),
  }),
});

const updateReview = z.object({
  body: z.object({
    service: z.string().optional(),
    rating: z.number().optional(),
    review: z.string().optional(),
  }),
});

export const ReviewValidations = { createReview, updateReview };

import { z } from 'zod';

const createFeedback = z.object({
  body: z.object({
    service: z.string({ required_error: 'Service Id is required' }),
    feedback: z.string({ required_error: 'Feedback is required' }),
  }),
});

export const FeedbackValidations = { createFeedback };

import { z } from 'zod';
import { ENUM_CLEANING_SERVICE_STATUS } from './interface';

const createService = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    price: z.number({ required_error: 'Price is required' }),
    description: z.string({ required_error: 'Description is required' }),
    status: z
      .enum(
        Object.values(ENUM_CLEANING_SERVICE_STATUS) as [string, ...string[]]
      )
      .optional(),
    category: z.string({ required_error: 'Category is required' }),
  }),
});

const updateService = z.object({
  body: z.object({
    title: z.string().optional(),
    price: z.number().optional(),
    description: z.string().optional(),
    status: z
      .enum(
        Object.values(ENUM_CLEANING_SERVICE_STATUS) as [string, ...string[]]
      )
      .optional(),
    category: z.string().optional(),
  }),
});

export const CleaningServiceValidations = { createService, updateService };

import { z } from 'zod';
import { ENUM_CONTENT_VISIBILITY_STATUS } from './interface';

const createContent = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    status: z
      .enum(
        Object.values(ENUM_CONTENT_VISIBILITY_STATUS) as [string, ...string[]]
      )
      .optional(),
  }),
});

export const ContentManagementValidators = { createContent };

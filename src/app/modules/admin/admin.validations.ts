import { z } from 'zod';
const createAdminZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    title: z.string().optional(),
  }),
});
const updateadminZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Title is required',
    }),
    title: z.string().optional(),
  }),
});
export const AdminValidation = {
  createAdminZodSchema,
  updateadminZodSchema,
};

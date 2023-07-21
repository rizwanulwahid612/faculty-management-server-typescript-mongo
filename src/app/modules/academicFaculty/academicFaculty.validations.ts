import { z } from 'zod';
const createFacultyZodSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required',
          }),
      title: z.string().optional(),
      
    }),
  });
  const updatefacultyZodSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required',
          }),
      title: z.string().optional(),
    
    }),
  });
  export const AcademicFacultyValidation = {
    createFacultyZodSchema,
    updatefacultyZodSchema
  };
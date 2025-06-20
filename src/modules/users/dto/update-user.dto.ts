import { z } from 'zod';

export const updateUserDto = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    full_name: z.string(),
    phone: z.string(),
    address: z.string().optional(),
  })
  .partial();

export type UpdateUserDto = z.infer<typeof updateUserDto>;

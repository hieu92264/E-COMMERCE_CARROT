import { z } from 'zod';

export const createUserDto = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  full_name: z.string(),
  phone: z.string(),
  address: z.string().optional(),
});

export type CreateUserDto = z.infer<typeof createUserDto>;

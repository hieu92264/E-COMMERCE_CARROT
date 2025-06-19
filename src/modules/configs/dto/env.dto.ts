import { z } from 'zod';

export const envDto = z.object({
  DB_TYPE: z.enum(['mysql', 'mssql']),
  DB_HOST: z.string().nonempty(),
  DB_PORT: z.coerce.number().int().positive(),
  DB_USER: z.string().nonempty(),
  DB_PASS: z.string(),
  DB_NAME: z.string().nonempty(),
  DB_SYNC: z.coerce.boolean(),

  HOST: z.string().nonempty(),
  PORT: z.coerce.number().int().positive(),

  JWT_SECRET: z.string().nonempty(),
  JWT_EXPIRES_IN: z.string().nonempty(),
});

export type EnvDto = z.infer<typeof envDto>;

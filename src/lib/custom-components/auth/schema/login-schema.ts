import { z } from 'zod';

export const loginFormSchema = z.object({
	username: z.string().min(2).max(15),
	password: z.string()
});

export type LoginFormSchema = typeof loginFormSchema;

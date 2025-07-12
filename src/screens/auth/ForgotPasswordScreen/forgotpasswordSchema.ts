import z from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.email('E-mail inválido'),
});
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

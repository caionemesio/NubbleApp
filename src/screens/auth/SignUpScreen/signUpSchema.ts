import {stringUtils} from '@utils';
import z from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z
    .string()
    .min(5, 'username deve ter pelo menos 5 caracteres')
    .regex(userNameRegex, 'username inválido')
    .toLowerCase(),
  firstName: z
    .string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .transform(stringUtils.capitalizeFirstLetter),
  lastName: z
    .string()
    .min(3, 'Sobrenome deve ter pelo menos 3 caracteres')
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter pelo menos 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

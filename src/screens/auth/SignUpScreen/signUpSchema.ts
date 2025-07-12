import z from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'username inválido').toLowerCase(),
  fullName: z.string().min(5, 'Nome completo deve ter pelo menos 5 caracteres').transform((val)=>{
    return val.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }),
  email: z.email('E-mail inválido'),
  password:z.string().min(8, 'Senha deve ter pelo menos 8 caracteres'),
});

export type SignUpSchema= z.infer<typeof signUpSchema>;

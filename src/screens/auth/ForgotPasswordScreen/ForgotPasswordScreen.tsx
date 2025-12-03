import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Text, Button, Screen, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotpasswordSchema';

export function ForgotPasswordScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {email: ''},
    mode: 'onChange',
  });
  const {showToast} = useToastService();
  const {reset} = useResetNavigationSuccess();
  const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
    onSuccess: () =>
      reset({
        title: 'Enviamos as instruções para seu e-mail',
        description:
          'Clique no link enviado no seu e-mail para recuperar sua senha',
        icon: {
          name: 'messageRound',
          color: 'primary',
        },
      }),
    onError: message =>
      showToast({
        message,
        type: 'error',
      }),
  });

  function submitForm(formValues: ForgotPasswordSchema) {
    requestNewPassword(formValues.email);

    // TODO: enviar o e-mail para recuperação de senha
  }
  return (
    <Screen canGoBack>
      <Text mb="s16" preset="headingLarge">
        Esqueci minha senha
      </Text>
      <Text mb="s32" preset="paragraphLarge">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu Email"
        boxProps={{marginBottom: 's40'}}
      />
      <Button
        title="Recuperar senha"
        loading={isLoading}
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}

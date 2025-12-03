import {useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
  ActivityIndicator,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {signUpSchema, SignUpSchema} from './signUpSchema';
import {useAsyncValidation} from './useAsyncValidation';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {isLoading, signUp} = useAuthSignUp({
    onSuccess: () => {
      reset({
        title: 'Sua conta foi criada com sucesso',
        description: 'Agora é só fazer login na nossa plataforma',
        icon: {
          name: 'checkRound',
          color: 'success',
        },
      });
    },
  });

  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      mode: 'onChange',
    });

  const {usernameValidation, emailValidation} = useAsyncValidation({
    watch,
    getFieldState,
  });

  const submitForm = (formValues: SignUpSchema) => {
    signUp(formValues);
    console.log('Form Values:', formValues);

    //TODO: implementar
  };
  return (
    <Screen scrollable canGoBack>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="username"
        label="Nome de usuário"
        placeholder="@"
        errorMessage={usernameValidation.errorMessage}
        boxProps={{mb: 's20'}}
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />
      <FormTextInput
        control={control}
        name="firstName"
        label="Nome "
        placeholder="Digite seu nome "
        autoCapitalize="words"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="lastName"
        label="Sobrenome"
        placeholder="Digite seu nome sobrenome"
        autoCapitalize="words"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu Email"
        errorMessage={emailValidation.errorMessage}
        boxProps={{mb: 's20'}}
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        loading={isLoading}
        disabled={
          !formState.isValid ||
          usernameValidation.notReady ||
          emailValidation.notReady
        }
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}

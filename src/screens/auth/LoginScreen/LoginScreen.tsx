import {useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {showToast} = useToastService();
  const {signIn, isLoading} = useAuthSignIn({
    onError: message => showToast({message, type: 'error'}),
  });
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {email: '', password: ''},
    mode: 'onChange',
  });
  const submitForm = ({email, password}: LoginSchema) => {
    signIn({email, password});
  };
  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu Email"
        boxProps={{marginBottom: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's20'}}
      />
      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>
      <Button
        loading={isLoading}
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        mt="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}

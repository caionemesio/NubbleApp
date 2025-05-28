import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
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
      <TextInput
        label="E-mail"
        placeholder="Digite seu Email"
        boxProps={{marginBottom: 's40'}}
      />
      <Button title="Recuperar senha" onPress={submitForm} />
    </Screen>
  );
}

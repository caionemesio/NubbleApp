import {Button} from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

export function SignUpScreen() {
  const submitForm = () => {
    //TODO: implementar
  };
  return (
    <Screen scrollable canGoBack>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <TextInput
        label="Seu nome de usuário"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
       label="Nova Senha"
       placeholder="Digite sua nova senha"
       boxProps={{mb:'s48'}}
      />

      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  );
}

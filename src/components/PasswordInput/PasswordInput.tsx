import {useState} from 'react';
import {Icon} from '../Icon/Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

export type PasswordInputProps = Omit<
  TextInputProps,
  'RightComponent' | 'secureTextEntry'
>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecuriteTextEntry, setIsSecuriteTextEntry] = useState(true);

  return (
    <TextInput
      secureTextEntry={isSecuriteTextEntry}
      placeholder="Digite sua senha"
      {...props}
      RightComponent={
        <Icon
          name={isSecuriteTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={() => setIsSecuriteTextEntry(prev => !prev)}
        />
      }
    />
  );
}

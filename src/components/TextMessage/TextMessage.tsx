import {useRef} from 'react';
import {
  TextInput as RNTextInput,
  Pressable,
  TextInputProps,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';
import {$textInputStyle} from '../TextInput/TextInput';

interface TextMessageProps extends TextInputProps {
  onPressSend: (message: string) => void;
}
export function TextMessage({
  onPressSend,
  value,
  ...textInputProps
}: TextMessageProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const sendIsDisabled = value?.trim().length === 0;
  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12">
        <RNTextInput
          ref={inputRef}
          placeholderTextColor={colors.gray2}
          value={value}
          style={{...$textInputStyle, color: colors.gray1}}
          {...textInputProps}
        />
        <Pressable
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value || '')}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'}>Enviar</Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}

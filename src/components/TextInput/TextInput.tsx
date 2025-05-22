import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, boxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useRef} from 'react';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  boxProps?: boxProps;
}
export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const $textInputContainer: boxProps = {
    borderWidth: errorMessage ? 2 : 1,
    flexDirection: 'row',
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
  };

  const $textInputStyle: TextStyle = {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: $fontFamily.regular,
    color: colors.grayBlack,
    ...$fontSizes.paragraphMedium,
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" marginBottom="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box ml="s16" justifyContent="center">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text color="error" preset="paragraphSmall" bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

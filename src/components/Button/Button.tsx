import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading, ...touchableOpacityBoxProps}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

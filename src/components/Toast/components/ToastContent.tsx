import {Dimensions} from 'react-native';

import {Toast, ToastType} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface props {
  toast: Toast;
}

export function ToastContent({toast}: props) {
  const type: ToastType = toast?.type || 'success';

  return (
    <Box {...$boxStyle} style={$shadowProps}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {name: 'checkRound', color: 'success'},
  error: {name: 'errorRound', color: 'error'},
};

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  opacity: 0.95,
  width: MAX_WIDTH,
};

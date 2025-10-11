import {Pressable} from 'react-native';

import {Text} from '@components';

interface Props {
  fetchNextPage: () => void;
}

export function PostCommentBottom({fetchNextPage}: Props) {
  return (
    <Pressable onPress={fetchNextPage}>
      <Text bold color="primary" textAlign="center">
        Ver mais
      </Text>
    </Pressable>
  );
}

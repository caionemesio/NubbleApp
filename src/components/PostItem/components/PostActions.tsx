import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type PostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;
export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: PostActionsProps) {
  const likePost = () => {
    //TODO: Implement like post functionality
  };

  const navigationToComments = () => {
    //TODO: Implement navigation to comments
  };
  const favoritePost = () => {
    //TODO: Implement favorite post functionality
  };

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        icon={{default: 'heart', marked: 'heartFill'}}
        onPress={likePost}
        text={reactionCount}
      />
      <Item
        icon={{default: 'comment', marked: 'comment'}}
        onPress={navigationToComments}
        text={commentCount}
      />
      <Item
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        onPress={favoritePost}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  marked?: boolean;
}

function Item({icon, onPress, text, marked = false}: ItemProps) {
  return (
    <TouchableOpacityBox
      mr="s24"
      onPress={onPress}
      flexDirection="row"
      alignItems="center">
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'market' : undefined}
      />
      {text > 0 && (
        <Text ml="s4" preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
